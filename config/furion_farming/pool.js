import {
    getMockUSDABI,
    getFarmingPoolUpgradeableABI,
    getAddress
} from "@/utils/common/contractABI";

import { getContract, fromWei } from "@/utils/common";
import { getLatestSummary } from "@/api/furion_swap";
import { getTokenPrice } from "@/api/furion_farming";

const SECONDS_PER_DAY = 24 * 60 * 60;


export const getFarmingPool = async (
    token_0_symbol,
    token_0_img,
    token_1_symbol,
    token_1_img, 
    lp_token_address,
    chainId
    ) => {
    const pool_name = "" + token_0_symbol + "/" + token_1_symbol;
    let pool = {
        pool_name: pool_name,
        token_0: token_0_symbol, 
        token_1: token_1_symbol,
        token_0_image: token_0_img,
        token_1_image: token_1_img,

        lp_token: 'FSL',
        lp_token_address: lp_token_address,
        lp_token_contract: {},
        lp_token_decimal: '18',
        lp_token_price: '',
        lp_total: '',
        lp_added: '',

        reward_token: 'FUR',
        reward_token_decimal: '18',
        fur_price_usdt: '',

        farming_address: '0xf4E1Ab751e8f7687Fe65b6e33eEcAd7c0bA8C808',
        farming_contract: {},

        pool_Id: 0,

        user_balance: '',
        user_stake: '',
        user_reward: '',

        allowance_liquidity: 0,
        liquidity_approved: false,

        amt: '',
        percent: 0,
        type: '1',
        index: 0,

        tvl: '',
        apr: '',
        reward_per_day: '',

        initialized: false,
    }
    let final_pool = await initPool(pool, chainId);
    return final_pool;
}

const initPool = async (initial_pool, chainId) => {
    let pool = initial_pool;
    try {
    const lp_token_contract = await getContract(await getMockUSDABI(), pool.lp_token_address);
    const lp_token_decimal = parseInt(await lp_token_contract.methods.decimals().call());
    pool.lp_token_contract = lp_token_contract;
    pool.lp_token_decimal = lp_token_decimal.toString();

    // set up farming contract
    const farming_contract = await getContract(await getFarmingPoolUpgradeableABI(), pool.farming_address);
    pool.farming_contract = farming_contract;
    //console.log('[Token Farming] [Init] Farming contract ', pool.farming_contract);
 
    // set up pool Id
    const poolList = await farming_contract.methods.getPoolList().call();
    let Id = 1;
    for (; Id < poolList.length; Id ++) {
        if (poolList[Id].lpToken == pool.lp_token_address) {
            pool.pool_Id = Id;
            break;
        }
    }

    const single_pool = await pool.farming_contract.methods.poolList(Id).call();
    const reward = fromWei(single_pool.basicFurionPerSecond, 18).toFixed(4);
    //console.log('[Basic Reward Per Second] ', reward);
    pool.reward_per_day = (reward * SECONDS_PER_DAY).toFixed(4);
    //console.log('[Reward Per Day] ', pool.reward_per_day);

    // init tvl and apr
    let summary = await getPoolSummary(pool, chainId);
    pool.tvl = summary['tvl'];
    pool.apr = summary['apr'];
     
    } catch (e) {
        console.warn(e);
        console.log(e);
    }

    pool.initialized = true;
    return pool;
}

export const getPoolSummary = async (pool, chainId) => {
    let summary = {
        'tvl': '',
        'apr': '',
    }

    try {
        let network = '';
        if (chainId == 4) {
            network = 'rinkeby';
        } else if (chainId == 1) {
            network = 'mainnet';
        }

        const lp_token_decimal = parseInt(pool.lp_token_decimal);
        const lp_token_contract = pool.lp_token_contract;

        const lp_added = fromWei(
                            await lp_token_contract.methods.balanceOf(pool.farming_address).call(), 
                            lp_token_decimal).toFixed(4);

        const lp_total = fromWei(
                            await lp_token_contract.methods.totalSupply().call(), 
                            lp_token_decimal).toFixed(4);


        const price_result = await getLatestSummary(pool.token_0, pool.token_1, network);
        let data = price_result['data'];
        const tvl = parseFloat(data['tvl'].toFixed(4)) * (parseFloat(lp_added) / parseFloat(lp_total));
        summary['tvl'] = tvl.toFixed(4);
        //console.log('[TVL] ', pool.tvl);

  
        /**
         * APR calculation:
         * pool.reward_per_data * price of fur / (365 * pool.tvl)
         * Get price of 1 FUR
        */

        const fur_price = await getPrice ('FUR', network);
        const apr = (parseFloat(pool.reward_per_day) * parseFloat(fur_price)) / (365 * tvl);
        summary['apr'] = apr.toFixed(4);
        //console.log('[APR] ', pool.apr)

    } catch(e) {
        console.warn(e);
        console.log('[Pool Summary] Error');
    }

    return summary;
}

const getPrice = async(token, network) => {
    let token_data = await getTokenPrice(token, network);
    return token_data['data']['data'];
}