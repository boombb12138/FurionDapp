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

export const swap_info = {
    token_0: 'USDT',
    token_1: 'FUR',
    token_0_address: '0x27B3A54023Fc257888b8844f60A1aEB80e9f5c84',
    token_1_address: '0x175940b39014cD3a9c87cd6b1d7616a097db958E',
    token_0_contract: {},
    token_1_contract: {},
    token_0_image: require("@/assets/images/liquidity/tokens/USDT.png"),
    token_1_image: require('@/assets/images/liquidity/tokens/FUR.png'),
    token_0_decimal: 18,
    token_1_decimal: 18,

    pair_address: '0x000000000000000000000000000000000000000',
    pair_contract: {},
    fee_rate: 0,
    token_0_balance: 0,
    token_1_balance: 0,
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
}

export const initFurionSwapInfo = async (single_swap, chainId) => {

    // initial token contract and get decimal for these two tokens
    const token_0_contract = await getContract(await getMockUSDABI(), single_swap.token_0_address);
    const token_1_contract = await getContract(await getMockUSDABI(), single_swap.token_1_address);

    const multicall = newMultiCallProvider(chainId);
    let multicall_list = [token_0_contract.methods.decimals(), token_1_contract.methods.decimals()];
    
    const decimal_result = await multicall.aggregate(multicall_list);

    single_swap.token_0_decimal = decimal_result[0];
    single_swap.token_1_decimal = decimal_result[1];
    single_swap.token_0_contract = token_0_contract;
    single_swap.token_1_contract = token_1_contract;

    // initialize furion swap relavent contracts
    const factory = await getContract(await getFurionSwapFactoryABI(), '');
    const pair_address = await factory.methods.getPair(single_swap.token_0_address, single_swap.token_1_address).call();
    single_swap.pair_address = pair_address;


    const pair = await getContract(await getFurionSwapPairABI(), pair_address);
    single_swap.pair_contract = pair;
    const fee_rate = await pair.methods.feeRate().call();
    single_swap.fee_rate = parseInt(fee_rate) / 1000;

    // get reserves
    const reserves = await pair.methods.getReserves().call();
    if (single_swap.token_0_address < single_swap.token_1_address) {
        single_swap.token_0_reserve = fromWei(reserves[0], parseInt(decimal_result[0]));
        single_swap.token_1_reserve = fromWei(reserves[1], parseInt(decimal_result[1]));
    } else {
        single_swap.token_0_reserve = fromWei(reserves[1], parseInt(decimal_result[0]));
        single_swap.token_1_reserve = fromWei(reserves[0], parseInt(decimal_result[1]));
    }

    single_swap.pool_liquidity = single_swap.token_0_reserve * single_swap.token_1_reserve;


    // initialize router contract
    const router = await getContract(await getFurionSwapRouterABI(), '');
    single_swap.router_contract = router;
    single_swap.router_address = await getAddress()['FurionSwapV2Router'];

    return single_swap;
}