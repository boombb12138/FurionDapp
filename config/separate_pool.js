import { getNftIntroByProject } from "@/api/nft_intro";

export const separate_pool_info = {
};

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
    owners:  "5.4K",
    floor_price: "11.44",
    fXprice: "7.28",
    items: 999,
    in_pool: 999,

}

export const initSeparatePoolInfo = async (project, network) => {
    if(separate_pool_info.collection == project){
        return
    }

    let result = await getNftIntroByProject(project, network);
    // console.log('NFT intro request', result);
    let raw_data = result['data']['data'];

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
    separate_pool_info.volume = "28,919,65";
    separate_pool_info.owners =  "5.4K";
    separate_pool_info.floor_price = "11.44";
    separate_pool_info.fXprice = "7.28";
    separate_pool_info.items = raw_data['total_supply'];
    separate_pool_info.in_pool = raw_data['in_pool'];

    console.log('Separate Pool Info', separate_pool_info);
}