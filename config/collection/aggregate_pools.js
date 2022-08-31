import { getNftInfoByProject } from "@/api/nft_info";

export const initAvatars = async (list, network) => {
	for (let item of list) {
		for (let collection of item.collections) {
			const result = await getNftInfoByProject(collection.name, network);
    		const raw_data = result['data']['data'];

			collection.avatar = raw_data['image_url'];
		}
	}
}