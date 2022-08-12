import {
    getFurionTokenABI,
    getMockUSDABI,
    getFurionSwapFactoryABI,
    getFurionSwapRouterABI,
    getFurionSwapPairABI
} from "@/utils/common/contractABI";

import { getContract, fromWei } from "@/utils/common";

import { newMultiCallProvider } from "@/utils/web3/multicall";
import { getChainId } from "@/utils/web3";

export const swap_info = {
    token_0: 'USDT',
    token_1: 'FUR',
    token_0_address: '0x175940b39014cD3a9c87cd6b1d7616a097db958E',
    token_1_address: '0x27B3A54023Fc257888b8844f60A1aEB80e9f5c84',
    token_0_image: require("@/assets/images/liquidity/tokens/USDT.png"),
    token_1_image: require('@/assets/images/liquidity/tokens/FUR.png'),
}

export const initFurionSwap = async () => {
    const furion = await getContract(await getFurionTokenABI(), '');
    console.log('Furion symbol address', (await furion.methods.symbol().call()));
}