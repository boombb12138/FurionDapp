import { token_info } from "@/config/furion_swap/swap";
import { getContract } from "@/utils/common";
import {
  getMockUSDABI,
  getFEtherABI,
  getFErc20ABI,
  getRiskManagerABI,
  getPriceOracleABI,
  getAddress
} from "@/utils/common/contractABI";

const addressList = getAddress();

export const market_list = {
  "USDT": {
    name: "Tether USD",
    decimals: 6,
    address: addressList["MockUSD"],
    image: require("@/assets/images/liquidity/tokens/USDT.png"),
  },
  "ETH": {
    name: "Ethereum",
    decimals: 18,
    address: addressList["WETH"],
    image: require("@/assets/images/liquidity/tokens/ETH.png"),
  },
  "FUR": {
    name: "Furion",
    decimals: 18,
    address: addressList["FurionToken"],
    image: require('@/assets/images/liquidity/tokens/FUR.png'),
  }
};

export const user_info_default = {
  token_balance: 0,
  ftoken_balance: 0,
  deposited: 0,
  borrowed: 0,
  borrow_quota: 0,
  withdraw_quota: 0,
};

export const market_info_default = {
  supply_rate: 0,
  borrow_rate: 0,
  token_price: 0,
  cash: 0,
};

export const initTokenContract = async (symbol) => {
  let token_contract = {
    address: "",
    contract: {},
  };

  if (symbol === "ETH") {
    token_contract.address = "";
    token_contract.contract = {};
    return token_contract;
  }

  for (const token of token_info) {
    if (token.symbol === symbol) {
      token_contract.address = token.address;
      // todo 是不是一般来讲都是得到这个合约
      token_contract.contract = await getContract(
        await getMockUSDABI(), //这个ABI里面没有定义可以调用的合约方法？
        token.address
      );
    }
  }

  return token_contract;
};

export const initMarketContract = async (symbol) => {
  let market_contract = {
    address: "",
    contract: {},
  };

  if (symbol === "ETH") {
    const fetherABI = await getFEtherABI();
    market_contract.address = fetherABI.address;
    market_contract.contract = await getContract(fetherABI, "");
    return market_contract;
  }

  for (const token of token_info) {
    if (token.symbol === symbol) {
      market_contract.address = token.market_address;
      market_contract.contract = await getContract(
        await getFErc20ABI(),
        token.market_address
      );
    }
  }

  return market_contract;
};

export const initManagerContract = async () => {
  let manager_contract = {
    address: "",
    contract: {},
  };

  const managerABI = await getRiskManagerABI();
  manager_contract.address = managerABI.address;
  manager_contract.contract = await getContract(managerABI, "");

  return manager_contract;
};

export const initPriceOracle = async () => {
  let oracle_contract = {
    address: "",
    contract: {},
  };

  const oracleABI = await getPriceOracleABI();
  oracle_contract.address = oracleABI.address;
  oracle_contract.contract = await getContract(oracleABI, "");

  return oracle_contract;
};
