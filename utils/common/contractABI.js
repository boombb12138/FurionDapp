import addressStore from "@/assets/info/address.json";
import marketStore from "@/assets/info/MoneyMarket.json";
import spStore from "@/assets/info/SeparatePool.json";
import apStore from "@/assets/info/AggregatePool.json";
import swapStore from "@/assets/info/FurionSwap.json";

import FurionToken from "@/assets/abis/rinkeby/tokens/FurionToken.sol/FurionToken.json";
import MockUSD from "@/assets/abis/rinkeby/mock/MockUSD.sol/MockUSD.json";

import FurionSwapFactory from "@/assets/abis/rinkeby/furion-swap/FurionSwapFactory.sol/FurionSwapFactory.json";
import FurionSwapV2Router from "@/assets/abis/rinkeby/furion-swap/FurionSwapV2Router.sol/FurionSwapV2Router.json";
import FurionSwapPair from "@/assets/abis/rinkeby/furion-swap/FurionSwapPair.sol/FurionSwapPair.json";

import SeparatePoolFactory from "@/assets/abis/rinkeby/separate-pool/SeparatePoolFactory.sol/SeparatePoolFactory.json";
import SeparatePool from "@/assets/abis/rinkeby/separate-pool/SeparatePool.sol/SeparatePool.json";
import AggregatePoolFactory from "@/assets/abis/rinkeby/aggregate-pool/AggregatePoolFactory.sol/AggregatePoolFactory.json";
import AggregatePool from "@/assets/abis/rinkeby/aggregate-pool/AggregatePool.sol/AggregatePool.json";

import FEther from "@/assets/abis/rinkeby/money-market/FEther.sol/FEther.json";
import FErc20 from "@/assets/abis/rinkeby/money-market/FErc20.sol/FErc20.json";
import RiskManager from "@/assets/abis/rinkeby/money-market/RiskManager.sol/RiskManager.json";
import SimplePriceOracle from "@/assets/abis/rinkeby/money-market/SimplePriceOracle.sol/SimplePriceOracle.json";

import FarmingPoolUpgradeable from "@/assets/abis/rinkeby/furion-farming/FarmingPoolUpgradeable.sol/FarmingPoolUpgradeable.json";
import VoteEscrowedFurion from "@/assets/abis/rinkeby/furion-staking/VoteEscrowedFurion.sol/VoteEscrowedFurion.json";

import FuNFTPass from "@/assets/abis/rinkeby/pet/FuNFTPass.sol/FuNFTPass.json";
import FuCatNFT from "@/assets/abis/rinkeby/pet/FuCatNFT.sol/FuCatNFT.json";

import TestClaim from "@/assets/abis/rinkeby/TestClaim.sol/TestClaim.json";


export const getAddress = () => {
    let address = addressStore['rinkeby'];
    return address;
}

export const getMarkets = () => {
    let markets = marketStore['rinkeby'];
    return markets;
}

export const getMarket = (symbol) => {
    const markets = getMarkets();

    for (let market of markets) {
        if (market.name === symbol) {
            return market;
        }
    }

    console.log("Market not found");
    return {};
}

export const getSP = () => {
    let sp = spStore['rinkeby'];
    return sp;
}

export const getAP = () => {
    let ap = apStore['rinkeby'];
    return ap;
}

export const getSwap = () => {
    let swap = swapStore['rinkeby'];
    return swap;
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

export const getAggregateatePoolFactoryABI = async () => {
    let address = getAddress();
    AggregatePoolFactory.address = address['AggregatePoolFactory'];
    return AggregatePoolFactory;
}

export const getAggregatePoolABI = async () => {
    AggregatePool.address = '';
    return AggregatePool;
}

export const getFEtherABI = async () => {
    let feth = getMarket("fETH");
    FEther.address = feth.address;
    return FEther;
}

export const getFErc20ABI = async (symbol) => {
    let ferc = getMarket(symbol);
    FErc20.address = ferc.address;
    return FErc20;
}

export const getRiskManagerABI = async () => {
    let address = getAddress();
    RiskManager.address = address["RiskManager"];
    return RiskManager;
}

export const getPriceOracleABI = async () => {
    let address = getAddress();
    SimplePriceOracle.address = address["PriceOracle"];
    return SimplePriceOracle;
}

export const getFarmingPoolUpgradeableABI = async () => {
    let address = getAddress();
    FarmingPoolUpgradeable.address = address["FarmingPoolUpgradeable"];
    return FarmingPoolUpgradeable;
}

export const getVoteEscrowedFurionABI = async () => {
    let address = getAddress();
    VoteEscrowedFurion.address = address['VoteEscrowedFurion'];
    return VoteEscrowedFurion;
}

export const getFuNFTPassABI = async () => {
    let address = getAddress();
    FuNFTPass.address = address['FuNFTPass'];
    return FuNFTPass;
}

export const getFuCatNFTABI = async () => {
    let address = getAddress();
    FuCatNFT.address = address['FuCatNFT'];
    return FuCatNFT;
}

export const getTestClaimABI = async () => {
    let address = getAddress();
    TestClaim.address = address['TestClaim'];
    return TestClaim;
}