import {
    getFurionTokenABI,
    getVoteEscrowedFurionABI,
    getAddress
} from "@/local/utils/common/contractABI";
import { getContract, fromWei } from "@/local/utils/common";
//import { getLatestSummary } from "@/api/furion_swap";
import { getTokenPrice } from "@/api/furion_farming";


export const User = {
    current_fur_balance:    '0.000',
    current_fur_stake:      '0.000',
    pending_veFur_reward:   '0.000',

    total_fur_stake:        '0.000',
    total_veFur_supply:     '0.000',

    fur_address:            '0x000000000000000000000000000000000000000',
    veFur_address:          '0x000000000000000000000000000000000000000',

    fur_price:              0.0,
    staked_fur_value:       '0',


    fur_contract:           {},
    veFur_contract:         {},
}


export const InitUserInfo = async (user, chainId) => {
    try {
        //console.log('[Init User Info] Account ', account);
        let network = '';
        if (chainId == 4) {
            network = 'rinkeby';
        } else if (chainId == 1) {
            network = 'mainnet';
        }
        const addresses = getAddress();
        user.fur_address = addresses['FurionToken'];
        user.veFur_address = addresses['VoteEscrowedFurion'];
        user.fur_contract = await getContract(await getFurionTokenABI(), addresses['FurionToken']);
        user.veFur_contract = await getContract(await getVoteEscrowedFurionABI(), addresses['VoteEscrowedFurion']);

        const total_stake = await user.fur_contract.methods.balanceOf(user.veFur_address).call();
        user.total_fur_stake = fromWei(total_stake, 18)
        
        const total_veFur_supply = await user.veFur_contract.methods.totalSupply().call();
        user.total_veFur_supply = fromWei(total_veFur_supply, 18);
        
        const fur_price = await getPrice('FUR', network);
        user.fur_price = fur_price;

        return user;

    } catch(e) {
        console.warn(e);
    }
    
}

export const UpdateUserInfo = async(user, account) => {
    try {
        const total_stake = await user.fur_contract.methods.balanceOf(user.veFur_address).call();
        user.total_fur_stake = fromWei(total_stake, 18);

        const staked_fur_value = (parseFloat(user.total_fur_stake) * user.fur_price).toFixed(2);
        user.staked_fur_value = staked_fur_value;
    
        const total_veFur_supply = await user.veFur_contract.methods.totalSupply().call();
        user.total_veFur_supply = fromWei(total_veFur_supply, 18);

        const cur_balance = await user.fur_contract.methods.balanceOf(account).call();
        user.current_fur_balance = fromWei(cur_balance, 18);

        const user_info = await user.veFur_contract.methods.users(account).call();
        user.current_fur_stake = fromWei(user_info['amount'], 18);

        const claimable = await user.veFur_contract.methods.claimable(account).call();
        user.pending_veFur_reward = fromWei(claimable, 18);

        return user;

    } catch(e) {
        console.warn(e);
    }
}

// returns a price of the specified token
const getPrice = async(token, network) => {
    let token_data = await getTokenPrice(token, network);
    return token_data['data']['data'];
}

