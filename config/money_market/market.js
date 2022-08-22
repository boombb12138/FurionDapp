import { token_info } from "@/config/furion_swap/swap";
import { getContract } from '@/utils/common';
import { getMockUSDABI, getFEtherABI, getFErc20ABI, getRiskManagerABI } from "@/utils/common/contractABI";

export const initTokenContract = async (symbol) => {
	let token_contract = {
		address: "",
		contract: {}
	};

	if (symbol === "ETH") {
       	token_contract.address = "";
       	token_contract.contract = {};
	}

	for (const token of token_info) {
		if (token.symbol === symbol) {
			token_contract.address = token.address;
			token_contract.contract = await getContract(await getMockUSDABI(), token.address);
		}
	}

	return token_contract;
}

export const initMarketContract = async (symbol) => {
	let market_contract = {
		address: "",
		contract: {}
	};

	if (symbol === "ETH") {
		const fetherABI = await getFEtherABI();
		market_contract.address = fetherABI.address;
		market_contract.contract = await getContract(fetherABI, "");
	}

	for (const token of token_info) {
		if (token.symbol === symbol) {
			market_contract.address = token.market_address;
			market_contract.contract = await getContract(await getFErc20ABI(), token.market_address);
		}
	}

	return market_contract;
}

export const initManagerContract = async () => {
	let manager_contract = {
		address: "",
		contract: {}
	};

	const managerABI = await getRiskManagerABI();
	manager_contract.address = managerABI.address;
	manager_contract.contract = await getContract(managerABI, '');

	return manager_contract; 
}