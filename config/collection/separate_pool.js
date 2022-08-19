import { getNftInfoByProject, getNftImages, getNftHoldingInfo, getUri } from "@/api/nft_info";
import { query_abi } from "@/api/query_etherscan";
import { getContract, ipfsToHttp } from '@/utils/common';
import { getSeparatePoolABI, getFurionTokenABI, getSeparatePoolFactoryABI } from "@/utils/common/contractABI";

export const default_pool_info = {
    collection: 'Loading',
    nft_address: '0x',
    nft_contract: {},
    symbol: 'Furion',
    avatar: require("@/assets/images/avatar.png"),
    banner_url: require("@/assets/images/item.png"),
    description: '',
    external_link: '',
    twitter_name: 'furion',
    twitter_link: 'https://twitter.com/furion',
    volume: 9999,
    owners: 999,
    floor_price: 9.99,
    fXprice: 9.99,
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

export const defaultSeparatePoolInfo = () => {
    for (let key in default_pool_info) {
        separate_pool_info[key] = default_pool_info[key];
    }
}

export const initSeparatePoolInfo = async (project, network) => {
    if (separate_pool_info.collection == project) {
        return
    }

    defaultSeparatePoolInfo();

    let result = await getNftInfoByProject(project, network);
    // console.log('NFT info request', result);
    let raw_data = result['data']['data'];

    // entitle request info into separate pool info
    separate_pool_info.collection = raw_data['project'];
    separate_pool_info.nft_address = raw_data['address'];
    separate_pool_info.symbol = raw_data['symbol'];
    separate_pool_info.avatar = raw_data['image_url'];
    separate_pool_info.banner_url = raw_data['banner_url'];
    separate_pool_info.description = raw_data['description'].split('\\')[0];
    separate_pool_info.external_link = raw_data['external_link'];
    separate_pool_info.twitter_link = raw_data['twitter_link'];
    separate_pool_info.twitter_name = raw_data['twitter_link'].split('/')[3];
    separate_pool_info.volume = raw_data['volume'];
    separate_pool_info.owners = raw_data['owners'];
    separate_pool_info.floor_price = raw_data['floor_price'];
    separate_pool_info.fXprice = raw_data['reference_price_high'];
    separate_pool_info.items = raw_data['total_supply'];

    const nft_abi_request = await query_abi(raw_data['address']);
    const nft_abi = JSON.parse(nft_abi_request['data']['result']);
    // console.log('ABI info', nft_abi, '\n Address info', pool_info.address)
    let nft_contract = await getContract(nft_abi, raw_data['address']);
    separate_pool_info.nft_contract = nft_contract;

    const factoryContract = await initSeparatePoolFactoryContract();
    const poolAddress = await factoryContract.contract.methods.getPool(raw_data['address']).call();
    let raw_in_pool = (await getNftHoldingInfo(raw_data['address'], poolAddress.toLowerCase(), network))['data']['data'];

    let in_pool = [];
    for (let j = 0; j < raw_in_pool.length; j++) {
        let single_record = {
            token_id: raw_in_pool[j],
            image_url: require("@/assets/images/placeholder.png")
        }
        in_pool.push(single_record);
    }
    separate_pool_info.in_pool = in_pool;

    // console.log('Separate Pool Info', separate_pool_info);
}

export const initSeparatePoolContract = async (nftAddress) => {
    const factoryContract = await initSeparatePoolFactoryContract();

    let separate_pool_contract = {};
    const poolAddress = await factoryContract.contract.methods.getPool(nftAddress).call();
    const poolContract = await getContract(await getSeparatePoolABI(), poolAddress);
    separate_pool_contract.address = poolAddress;
    separate_pool_contract.contract = poolContract;

    return separate_pool_contract;
}

export const initFurContract = async () => {
    let fur_contract = {};
    const furABI = await getFurionTokenABI();
    fur_contract.address = furABI.address;
    fur_contract.contract = await getContract(furABI, '');

    return fur_contract;
}

// /**
//  * initial token image for different NFT, pick images from centralized database
//  * @param {object} pool_info pool info to operate on
//  * @returns no returns, directly update pool info
//  */
// export const initTokenImage = async (pool_info, network) => {
//     if (pool_info.nft_address.length < 4) {
//         return
//     }
//     let in_pool = pool_info.in_pool;
//     if(in_pool.length < 1){
//         return
//     }

//     let token_id_str = '';
//     for(let i=0; i<in_pool.length; i++){
//         token_id_str += in_pool[i].token_id + '_';
//     }

//     const nft_image_request = await getNftImages(pool_info.nft_address, token_id_str.substr(0, token_id_str.length - 1), network);
//     // console.log('Image info', nft_image_request)

//     const nft_images = nft_image_request['data']['data'];

//     for (let i = 0; i < in_pool.length; i++) {
//         in_pool[i].image_url = nft_images[in_pool[i].token_id];
//     }
// }

export const initTokenImage = async (pool_info, network) => {
    if (pool_info.nft_address.length < 4) {
        return
    }
    let in_pool = pool_info.in_pool;

    let nft_contract = pool_info.nft_contract;
    // console.log('NFT contract info', nft_contract);
    for (let i = 0; i < in_pool.length; i++) {
        nft_contract.methods.tokenURI(in_pool[i].token_id).call().then(
            (uri) => {
                // console.log('Token URI', uri);
                getUri(uri).then(res => {
                    // console.log(i, 'get updated succesfully')
                    // console.log('URI specific info', res.data)
                    let raw_image_url = res.data.image;
                    in_pool[i].image_url = raw_image_url[0] == 'i'
                        ? ipfsToHttp(raw_image_url) : raw_image_url;
                })
            }
        )
    }
}

export const initSeparatePoolFactoryContract = async () => {
    let factory_contract = {};
    const factoryABI = await getSeparatePoolFactoryABI();
    factory_contract.address = factoryABI.address;
    factory_contract.contract = await getContract(factoryABI, '');

    return factory_contract;
}

export const query_user_holding = async (nft_address, user_address, network) => {
    let in_pool = [];
    try{
        in_pool = (await getNftHoldingInfo(nft_address, user_address.toLowerCase(), network))['data']['data'];
    }catch(e){
        console.warn(e);
        return
    }
    

    // console.log('User list result', in_pool)

    if (in_pool.length < 1) {
        return []
    }

    let final_result = [];
    for (let i = 0; i < in_pool.length; i++) {
        final_result.push({
            token_id: in_pool[i],
            image_url: require("@/assets/images/placeholder.png")
        })
    }
    // console.log('Initial final result is', final_result)

    const nft_abi_request = await query_abi(nft_address);
    const nft_abi = JSON.parse(nft_abi_request['data']['result']);

    let nft_contract = await getContract(nft_abi, nft_address);

    for (let i = 0; i < in_pool.length; i++) {
        let temp_uri = await nft_contract.methods.tokenURI(in_pool[i]).call();

        let result = await getUri(temp_uri);
        let raw_image_url = result.data.image;
        final_result[i].image_url = raw_image_url[0] == 'i' ? ipfsToHttp(raw_image_url) : raw_image_url;
    }
    // let token_id_str = '';
    // for(let i=0; i<nft_list.length; i++){
    //     token_id_str += nft_list[i].token_id + '_';
    // }

    // const nft_image_request = await getNftImages(nft_address, token_id_str.substr(0, token_id_str.length - 1), network);
    // // console.log('Image info', nft_image_request)

    // const nft_images = nft_image_request['data']['data'];

    // for (let i = 0; i < nft_list.length; i++) {
    //     let temp_record = {
    //         token_id: nft_list[i],
    //         image_url: nft_images[nft_list[i]]
    //     }
    //     final_result.push(temp_record)
    // }
    return final_result
}