import { getContract, ipfsToHttp } from '@/utils/common';
import { getSeparatePoolABI, getAggregatePoolABI, getFurionTokenABI } from "@/utils/common/contractABI";
import { getNftInfoByProject } from "@/api/nft_info"; //getPoolInfoByName

export const user_info_default = {
	fur_balance: 0,
	fft_balance: 0,
	ftoken_balance: [],
}

export const pool_info_default = {
    name: 'Mixed',
    id: 1,
    address: '0xa2095b1eF913c84e83467A1eB2ECf06180f226Ff',
    in_pool: [],
    stake_fee: 0,
    unstake_fee: 0,
    symbol: 'MIX',
    avatar: require("@/assets/images/merged.gif"),
    banner_url: require("@/assets/images/item.png"),
    description: '',
    volume: 9999,
    owners: 999,
    fft_price: 9.99,
    collections: [
    	{ id: 0, name: "Cool Cats", symbol: "COOL", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x2Ce7215FB07F80d6d23069c40e9D1f93F5144af8', contract: {} },
    	{ id: 1, name: "World Of Women", symbol: "WOW", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x0c3C23fD1e5630320F10F277491E3fdFC34A3C89', contract: {} },
        { id: 2, name: "Cryptoadz", symbol: "TOADZ", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x9455AdFCB76822F183fb23Df8a4A6e9Ad1a7506F', contract: {} },
        { id: 3, name: "PudgyPenguins", symbol: "PPG", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0xfd477753ad937DBDD9e625395aB112B77DA16A8b', contract: {} },
        { id: 4, name: "Invisible Friends", symbol: "INVSBLE", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x21D6F28f81f4309F9190d056b0Ee90E4160451eB', contract: {} },
        { id: 5, name: "CryptoDickbutts S3", symbol: "CDB", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0xbEDB8C7305D3e63Afab5665638F7713BA42b185d', contract: {} },
    ],
};

export const initPoolInfo = async (poolName) => {
	const init = pool_info_default;

	for (let collection of init.collections) {
		const result = await getNftInfoByProject(collection.name, 'rinkeby');
    	const raw_data = result['data']['data'];

		collection.image_url = raw_data['image_url'];
		collection.contract = await initSPoolContract(collection.ftoken_address);
	}
	
	/*
	const result = await getPoolInfoByName(poolName);
	const raw_data = result["data"]["data"];

	init.name = poolName;
	init.id = raw_data["id"];
	init.address = raw_data["address"];
	init.symbol = raw_data["symbol"];
	init.avatar = raw_data["avatar"];
	init.banner_url = raw_data["banner_url"];
	init.description = raw_data["description"];
	init.volume = raw_data["volume"];
	init.owners = raw_data["owners"];
	init.fft_price = raw_data["fft_price"];
	init.collections = raw_data["collections"];

	for (let collection of init.collections) {
		collection.contract = initSPoolContract(colelction.ftoken_address);
	}
	*/

	return init;
}

export const initSPoolContract = async (poolAddress) => {
	return await getContract(await getSeparatePoolABI(), poolAddress);
}

export const initAPoolContract = async (poolAddress) => {
	let aggregate_pool_contract = {};
	const poolContract = await getContract(await getAggregatePoolABI(), poolAddress);
	aggregate_pool_contract.address = poolAddress;
    aggregate_pool_contract.contract = poolContract;

    return aggregate_pool_contract;
}

export const initFurContract = async () => {
    let fur_contract = {};
    const furABI = await getFurionTokenABI();
    fur_contract.address = furABI.address;
    fur_contract.contract = await getContract(furABI, '');

    return fur_contract;
}

export const initAvatars = async (list, network) => {
	for (let item of list) {
		for (let collection of item.collections) {
			const result = await getNftInfoByProject(collection.name, network);
    		const raw_data = result['data']['data'];

			collection.avatar = raw_data['image_url'];
		}
	}
}