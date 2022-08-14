import addressStore from "@/assets/abis/address.json";

import FurionToken from "@/assets/abis/rinkeby/tokens/FurionToken.sol/FurionToken.json";
import MockUSD from "@/assets/abis/rinkeby/mock/MockUSD.sol/MockUSD.json";

import FurionSwapFactory from "@/assets/abis/rinkeby/furion-swap/FurionSwapFactory.sol/FurionSwapFactory.json";
import FurionSwapV2Router from "@/assets/abis/rinkeby/furion-swap/FurionSwapV2Router.sol/FurionSwapV2Router.json";
import FurionSwapPair from "@/assets/abis/rinkeby/furion-swap/FurionSwapPair.sol/FurionSwapPair.json";

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