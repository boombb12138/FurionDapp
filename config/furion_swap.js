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

export const initFurionSwap = async () => {
    const furion = await getContract(await getFurionTokenABI(), '');
    console.log('Furion symbol address', (await furion.methods.symbol().call()));
}