import { getNftIntroByProject, getUri } from "@/api/nft_info";
import { query_abi } from "@/api/query_etherscan";
import { getContract, ipfsToHttp } from '@/utils/common';
import { getNftDynamic } from "@/api/nft_dynamic";

export const default_pool_info = {
    collection: 'Loading',
    address: '0x',
    symbol: 'Furion',
    avatar: require("@/assets/images/avatar.png"),
    banner_url: require("@/assets/images/item.png"),
    description: '',
    external_link: '',
    twitter_name: 'furion',
    twitter_link: 'https://twitter.com/furion',
    volume: "28,919,65",
    owners: "5.4K",
    floor_price: "11.44",
    fXprice: "7.28",
    items: 999,
    in_pool: [
        { token_id: 1, image_url: require("@/assets/images/placeholder.png") },
        { token_id: 2, image_url: require("@/assets/images/placeholder.png") },
        { token_id: 3, image_url: require("@/assets/images/placeholder.png") },
        { token_id: 4, image_url: require("@/assets/images/placeholder.png") },
        { token_id: 5, image_url: require("@/assets/images/placeholder.png") },
    ],
};

export const separate_pool_info = default_pool_info;

export const initSeparatePoolInfo = async (project, network) => {
    if (separate_pool_info.collection == project) {
        return
    }

    let result = await getNftIntroByProject(project, network);
    // console.log('NFT intro request', result);
    let raw_data = result['data']['data'];
    let result_dynamic = await getNftDynamic(raw_data['address'],network);
    let raw_data_dynamic = result_dynamic['data']['data'];

    // entitle request info into separate pool info
    separate_pool_info.collection = raw_data['project'];
    separate_pool_info.address = raw_data['address'];
    separate_pool_info.symbol = raw_data['symbol'];
    separate_pool_info.avatar = raw_data['image_url'];
    separate_pool_info.banner_url = raw_data['banner_url'];
    separate_pool_info.description = raw_data['description'].split('\\')[0];
    separate_pool_info.external_link = raw_data['external_link'];
    separate_pool_info.twitter_link = raw_data['twitter_link'];
    separate_pool_info.twitter_name = raw_data['twitter_link'].split('/')[3];
    separate_pool_info.volume = `${raw_data_dynamic[0]['volume']}`;
    separate_pool_info.owners = `${raw_data_dynamic[0]['owners']}`;
    separate_pool_info.floor_price = `${raw_data_dynamic[0]['floor_price']}`;
    separate_pool_info.fXprice = raw_data_dynamic[0]['reference_price_low'];
    separate_pool_info.items = `${raw_data_dynamic[0]['total_supply']}`;

    let in_pool = [];
    for (let j = 0; j < raw_data['in_pool'].length; j++) {
        let single_record = {
            token_id: raw_data['in_pool'][j],
            image_url: require("@/assets/images/placeholder.png")
        }
        in_pool.push(single_record);
    }
    separate_pool_info.in_pool = in_pool;

    // console.log('Separate Pool Info', separate_pool_info);
}

/**
 * initial token image for different NFT, directly query onchain, sync
 * @param {object} pool_info pool info to operate on
 * @returns no returns, directly update pool info
 */
export const initTokenImage = async (pool_info) => {
    if (pool_info.address.length < 4) {
        return
    }
    let in_pool = pool_info.in_pool;

    const nft_abi_request = await query_abi(pool_info.address);
    const nft_abi = JSON.parse(nft_abi_request['data']['result']);
    // console.log('ABI info', nft_abi, '\n Address info', pool_info.address)
    let nft_contract = await getContract(nft_abi, pool_info.address);
    // console.log('NFT contract info', nft_contract);
    for (let i = 0; i < in_pool.length; i++) {
        nft_contract.methods.tokenURI(in_pool[i].token_id).call().then(
            (uri) => {
                // console.log('Token URI', uri);
                getUri(uri).then(res=>{
                    // console.log(i, 'get updated succesfully')
                    // console.log('URI specific info', res.data)
                    let raw_image_url = res.data.image;
                    in_pool[i].image_url = raw_image_url[0] == 'i'
                        ? ipfsToHttp(raw_image_url): raw_image_url;
                })
            }
        )
    }
}