import addressStore from "@/assets/abis/address.json";

import FurionToken from "@/assets/abis/rinkeby/tokens/FurionToken.sol/FurionToken.json";
import MockUSD from "@/assets/abis/rinkeby/mock/MockUSD.sol/MockUSD.json";

import FurionSwapFactory from "@/assets/abis/rinkeby/furion-swap/FurionSwapFactory.sol/FurionSwapFactory.json";
import FurionSwapV2Router from "@/assets/abis/rinkeby/furion-swap/FurionSwapV2Router.sol/FurionSwapV2Router.json";
import FurionSwapPair from "@/assets/abis/rinkeby/furion-swap/FurionSwapPair.sol/FurionSwapPair.json";

import SeparatePoolFactory from "@/assets/abis/rinkeby/separate-pool/SeparatePoolFactory.sol/SeparatePoolFactory.json";
import SeparatePool from "@/assets/abis/rinkeby/separate-pool/SeparatePool.sol/SeparatePool.json";

import FEther from "@/assets/abis/rinkeby/money-market/FEther.sol/FEther.json";
import FErc20 from "@/assets/abis/rinkeby/money-market/FErc20.sol/FErc20.json";

export const getAddress = () => {
    let address = addressStore['rinkeby'];
    return address;
}

export const getFurionTokenABI = async () => {
    let address = getAddress();
    FurionToken.address = address['FurionToken'];
    return FurionToken;
}

export const getMockUSDABI = async () => {
    let address = getAddress();
    MockUSD.address = address['MockUSD'];
    return MockUSD;
}

export const getFurionSwapFactoryABI = async () => {
    let address = getAddress();
    FurionSwapFactory.address = address['FurionSwapFactory'];
    return FurionSwapFactory;
}

export const getFurionSwapRouterABI = async () => {
    let address = getAddress();
    FurionSwapV2Router.address = address['FurionSwapV2Router'];
    return FurionSwapV2Router;
}

export const getFurionSwapPairABI = async () => {
    let address = getAddress();
    FurionSwapPair.address = ''; // we do not have a pair for address
    return FurionSwapPair;
}

export const getSeparatePoolFactoryABI = async () => {
    let address = getAddress();
    SeparatePoolFactory.address = address['SeparatePoolFactory'];
    return SeparatePoolFactory;
}

export const getSeparatePoolABI = async () => {
    SeparatePool.address = '';
    return SeparatePool;
}

export const getFEtherABI = async () => {
    let address = getAddress();
    FEther.address = address["FEther Proxy"];
    return FEther;
}

export const getFErc20ABI = async () => {
    FErc20.address = '';
    return FErc20;
}
