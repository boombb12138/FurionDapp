import addressStore from "@/assets/abis/address.json";

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

import IncomeMaker from "@/assets/abis/rinkeby/income-sharing/IncomeMaker.sol/IncomeMaker.json";
import IncomeSharingVault from "@/assets/abis/rinkeby/income-sharing/IncomeSharingVault.sol/IncomeSharingVault.json";

import FuNFTPass from "@/assets/abis/rinkeby/pet/FuNFTPass.sol/FuNFTPass.json";
import FuCatNFT from "@/assets/abis/rinkeby/pet/FuCatNFT.sol/FuCatNFT.json";

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
    SeparatePoolFactory.address = address['Separate Pool Factory'];
    return SeparatePoolFactory;
}

export const getSeparatePoolABI = async () => {
    SeparatePool.address = '';
    return SeparatePool;
}

export const getAggregateatePoolFactoryABI = async () => {
    let address = getAddress();
    AggregatePoolFactory.address = address['Aggregate Pool Factory'];
    return AggregatePoolFactory;
}

export const getAggregatePoolABI = async () => {
    AggregatePool.address = '';
    return AggregatePool;
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

export const getRiskManagerABI = async () => {
    let address = getAddress();
    RiskManager.address = address["Risk Manager Proxy"];
    return RiskManager;
}

export const getPriceOracleABI = async () => {
    let address = getAddress();
    SimplePriceOracle.address = address["Price Oracle"];
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

export const getIncomeMakerABI = async () => {
    let address = getAddress();
    IncomeMaker.address = address['IncomeMaker'];
    return IncomeMaker;
}

export const getIncomeSharingVaultABI = async () => {
    let address = getAddress();
    IncomeSharingVault.address = address['IncomeSharingVault'];
    return IncomeSharingVault;
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