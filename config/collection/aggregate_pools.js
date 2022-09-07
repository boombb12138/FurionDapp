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
    address: '0xe666e31F96d3E4f1da83a702FAF0dd465deBF481',
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
    	{ id: 0, name: "Cool Cats", symbol: "COOL", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0xEc5753503C317348d494C852DF64731D3D22d87d', contract: {} },
    	{ id: 1, name: "World Of Women", symbol: "WOW", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x91378239b775160312C0E6E71059206B68C1ee99', contract: {} },
        { id: 2, name: "Cryptoadz", symbol: "TOADZ", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x34CFf867e3d3D24063b39390Dadde1711AE24Fd4', contract: {} },
        { id: 3, name: "PudgyPenguins", symbol: "PPG", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0xbbe320d5C7B8d7c3d6E47b2444e3aa973FbBA32F', contract: {} },
        { id: 4, name: "Invisible Friends", symbol: "INVSBLE", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0xd005ED162E73aBfB22390E58818aC1bA647E007E', contract: {} },
        { id: 5, name: "CryptoDickbutts S3", symbol: "CDB", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x76970030C95FdA545eBa2e7b3D002a85F7B0C47c', contract: {} },
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