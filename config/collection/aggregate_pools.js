import { getContract, ipfsToHttp } from '@/utils/common';
import { getAggregatePoolABI, getFurionTokenABI } from "@/utils/common/contractABI";
import { getNftInfoByProject } from "@/api/nft_info"; //getPoolInfoByName

export const pool_info_default = {
    name: 'Loading',
    id: 1,
    address: '0x',
    symbol: 'Furion',
    avatar: require("@/assets/images/avatar.png"),
    banner_url: require("@/assets/images/item.png"),
    description: '',
    volume: 9999,
    owners: 999,
    fft_price: 9.99,
    collections: [
        { name: "Cryptoadz", symbol: "TOADZ", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x' },
        { name: "Cool Cats", symbol: "COOL", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x' },
        { name: "World Of Women", symbol: "WOW", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x' },
        { name: "PudgyPenguins", symbol: "PPG", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x' },
        { name: "Invisible Friends", symbol: "INVSBLE", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x' },
        { name: "CryptoDickbutts S3", symbol: "CDB", image_url: require("@/assets/images/placeholder.png"), ftoken_address: '0x' },
    ],
};

export const initPoolInfo = async (poolName) => {
	const init = pool_info_default;

	for (let collection of init.collections) {
		const result = await getNftInfoByProject(collection.name, 'rinkeby');
    	const raw_data = result['data']['data'];

		collection.image_url = raw_data['image_url'];
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
	*/

	return init;
}

export const initPoolContract = async (poolAddress) => {
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