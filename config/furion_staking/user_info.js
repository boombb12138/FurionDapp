import {
    getFurionTokenABI,
    getVoteEscrowedFurionABI,
    getAddress
} from "@/utils/common/contractABI";
import { getContract, fromWei } from "@/utils/common";


export const User = {
    current_fur_balance:    '0.000',
    current_fur_stake:      '0.000',
    pending_veFur_reward:   '0.000',

    total_fur_stake:        '0.000',
    total_veFur_supply:     '0.000',

    fur_address:            '0x000000000000000000000000000000000000000',
    veFur_address:          '0x000000000000000000000000000000000000000',

    fur_contract:           {},
    veFur_contract:         {},
}


export const InitUserInfo = async (user) => {
    try {
        //console.log('[Init User Info] Account ', account);
        const addresses = getAddress();
        user.fur_address = addresses['FurionToken'];
        user.veFur_address = addresses['VoteEscrowedFurion'];
        user.fur_contract = await getContract(await getFurionTokenABI(), addresses['FurionToken']);
        user.veFur_contract = await getContract(await getVoteEscrowedFurionABI(), addresses['VoteEscrowedFurion']);

        const total_stake = await user.fur_contract.methods.balanceOf(user.veFur_address).call();
        user.total_fur_stake = fromWei(total_stake, 18).toFixed(2);
        
        const total_veFur_supply = await user.veFur_contract.methods.totalSupply().call();
        user.total_veFur_supply = fromWei(total_veFur_supply, 18).toFixed(2);
    
        return user;

    } catch(e) {
        console.warn(e);
    }
    
}

export const UpdateUserInfo = async(user, account) => {
    try {
        const total_stake = await user.fur_contract.methods.balanceOf(user.veFur_address).call();
        user.total_fur_stake = fromWei(total_stake, 18).toFixed(2);
    
        const total_veFur_supply = await user.veFur_contract.methods.totalSupply().call();
        user.total_veFur_supply = fromWei(total_veFur_supply, 18).toFixed(2);

        const cur_balance = await user.fur_contract.methods.balanceOf(account).call();
        user.current_fur_balance = fromWei(cur_balance, 18).toFixed(2);

        const user_info = await user.veFur_contract.methods.users(account).call();
        user.current_fur_stake = fromWei(user_info['amount'], 18).toFixed(2);

        const claimable = await user.veFur_contract.methods.claimable(account).call();
        user.pending_veFur_reward = fromWei(claimable, 18).toFixed(2);

        return user;

    } catch(e) {
        console.warn(e);
    }
}