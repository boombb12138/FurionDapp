import getCharts from "@/utils/getCharts";
import { getNftIntro } from "@/api/nft_intro";

export const nft_intro = {
    init: false,
    NftList: []
};

export const initNftIntro = async (network) => {
    if(nft_intro.NftList.length > 0){
        return
    }
    let result = await getNftIntro(network);
    // console.log('NFT intro request', result);
    let raw_data = result['data']['data'];
    let final_result = [];

    for(let i=0; i<raw_data.length; i++){
        let temp = {
            id: i,
            collection: raw_data[i]['project'],
            address: raw_data[i]['address'],
            symbol: raw_data[i]['symbol'],
            avatar: raw_data[i]['image_url'],
            banner_url: raw_data[i]['banner_url'],
            description: raw_data[i]['description'],
            external_link: raw_data[i]['external_link'],
            twitter_link: raw_data[i]['twitter_link'],

            volume: '456777789789',
            _24h: "+2.94%",
            _7d: "-47.56%",
            floor_price: "11.44",
            owners: "5.4K",
            items: raw_data[i]['total_supply'],
            fXprice: "7.28",
            last7Days: ["10", "22", "50", "13", "31", "15", "22"],
            last7Days_type: i%2 + 1,
        };
        final_result.push(temp);
    }
    final_result = final_result.map((item) => {
        return {
          ...item,
          option: getCharts(item.last7Days, item.last7Days_type),
        };
    });
    nft_intro.NftList = final_result;
    nft_intro.init = true;
    // console.log('NFT intro result', final_result);
}