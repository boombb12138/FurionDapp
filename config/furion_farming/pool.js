import {
    //getFurionTokenABI,
    getMockUSDABI,
    getFurionSwapPairABI,
    getFurionSwapFactoryABI,
    getFarmingPoolUpgradeableABI,
    getAddress
} from "@/utils/common/contractABI";

import { getContract, fromWei } from "@/utils/common";

export const getFarmingPool = async (
    token_0_symbol,
    token_0_img,
    token_1_symbol, 
    token_1_img, 
    lp_token_address
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

        reward_token: 'FUR',
        reward_token_decimal: '18',

        farming_address: '0xf4E1Ab751e8f7687Fe65b6e33eEcAd7c0bA8C808',
        farming_contract: {},

        pool_Id: 0,

        user_balance: '999.99',
        user_stake: '999.99',
        user_reward: '999.99',

        allowance_liquidity: 0,
        liquidity_approved: false,

        amt: 0.0000,
        lp_token_value: 0.0,
        percent: 0,
        n: '',
        type: '1',
        index: 0,

        APR: '37.12',
        TOTAL_VALUE: '$ 1,245,672',
        REWARD_PER_DAY: '1.29 PER/DAY',

        initialized: false,
    }
    pool = await initPool(pool);
    return pool;
}

const initPool = async (pool) => {
    try {
    const lp_token_contract = await getContract(await getMockUSDABI(), pool.lp_token_address);
    const lp_token_decimal = parseInt(await lp_token_contract.methods.decimals().call());
    pool.lp_token_contract = lp_token_contract;
    pool.lp_token_decimal = lp_token_decimal.toString();

    console.log('[Token Farming] [Init] Lp token contract ', pool.lp_token_contract);
    
     // set up farming and router contract
     const farming_contract = await getContract(await getFarmingPoolUpgradeableABI(), pool.farming_address);
     pool.farming_contract = farming_contract;
     console.log('[Token Farming] [Init] Farming contract ', pool.farming_contract);
 
     // set up pool Id
     const poolList = await farming_contract.methods.getPoolList().call();
     let Id = 1;
     for (; Id < poolList.length; Id ++) {
         if (poolList[Id].lpToken == pool.lp_token_address) {
             pool.pool_Id = Id;
             break;
         }
     }
     
    } catch (e) {
        console.log(e);
    }
    pool.initialized = true;
    
    return pool;
}