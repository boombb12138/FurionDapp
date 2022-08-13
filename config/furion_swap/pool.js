import {
    getFurionTokenABI,
    getMockUSDABI,
    getFurionSwapFactoryABI,
    getFurionSwapRouterABI,
    getFurionSwapPairABI,
    getAddress
} from "@/utils/common/contractABI";

import { getContract, fromWei } from "@/utils/common";

import { newMultiCallProvider } from "@/utils/web3/multicall";
import { getChainId } from "@/utils/web3";

export const pool_info = {
    pool_list: [{
        token_0: 'USDT',
        token_1: 'FUR',
        token_0_address: '0x27B3A54023Fc257888b8844f60A1aEB80e9f5c84',
        token_1_address: '0x175940b39014cD3a9c87cd6b1d7616a097db958E',
        token_0_image: require("@/assets/images/liquidity/tokens/USDT.png"),
        token_1_image: require('@/assets/images/liquidity/tokens/FUR.png'),
    }]
}

export const single_swap_pool = {
    token_0: 'USDT',
    token_1: 'FUR',
    token_0_address: '0x175940b39014cD3a9c87cd6b1d7616a097db958E',
    token_1_address: '0x27B3A54023Fc257888b8844f60A1aEB80e9f5c84',
    token_0_contract: {},
    token_1_contract: {},
    token_0_image: require("@/assets/images/liquidity/tokens/USDT.png"),
    token_1_image: require('@/assets/images/liquidity/tokens/FUR.png'),
    token_0_decimal: 18,
    token_1_decimal: 18,

    pair_address: '0x000000000000000000000000000000000000000',
    pair_contract: {},
    token_0_balance: 999.99,
    token_1_balance: 999.99,
    token_0_reserve: 999.99,
    token_1_reserve: 999.99,
    
    router_address: '0x000000000000000000000000000000000000000',
    router_contract: {},

    pool_liquidity: 999.99,
    pair_liquidity: 999.99,
    user_liquidity: 999.99,
    user_liquidity_proportion: 99.99,
    token_0_pooled: 99.99,
    token_1_pooled: 99.99,

    initialized: false,

}


export const initSinglePool = async (single_pool, chainId) => {

    // initial token contract and get decimal for these two tokens
    const token_0_contract = await getContract(await getMockUSDABI(), single_pool.token_0_address);
    const token_1_contract = await getContract(await getMockUSDABI(), single_pool.token_1_address);

    const multicall = newMultiCallProvider(chainId);
    let multicall_list = [token_0_contract.methods.decimals(), token_1_contract.methods.decimals()];

    const decimal_result = await multicall.aggregate(multicall_list);

    single_pool.token_0_decimal = decimal_result[0];
    single_pool.token_1_decimal = decimal_result[1];
    single_pool.token_0_contract = token_0_contract;
    single_pool.token_1_contract = token_1_contract;

    // initialize furion swap relavent contracts
    const factory = await getContract(await getFurionSwapFactoryABI(), '');
    const pair_address = await factory.methods.getPair(single_pool.token_0_address, single_pool.token_1_address).call();
    single_pool.pair_address = pair_address;


    const pair = await getContract(await getFurionSwapPairABI(), pair_address);
    single_pool.pair_contract = pair;

    // get reserves
    const reserves = await pair.methods.getReserves().call();
    if (single_pool.token_0_address < single_pool.token_1_address) {
        single_pool.token_0_reserve = fromWei(reserves[0], parseInt(decimal_result[0]));
        single_pool.token_1_reserve = fromWei(reserves[1], parseInt(decimal_result[1]));
    } else {
        single_pool.token_0_reserve = fromWei(reserves[1], parseInt(decimal_result[0]));
        single_pool.token_1_reserve = fromWei(reserves[0], parseInt(decimal_result[1]));
    }

    single_pool.pool_liquidity = single_pool.token_0_reserve * single_pool.token_1_reserve;


    // initialize router contract
    const router = await getContract(await getFurionSwapRouterABI(), '');
    single_pool.router_contract = router;
    single_pool.router_address = await getAddress()['FurionSwapV2Router'];

    return single_pool;
}