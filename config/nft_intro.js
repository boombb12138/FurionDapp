import getCharts from "@/utils/getCharts";
import { getNftIntro } from "@/api/nft_intro";
import { getNftDynamic } from "@/api/nft_dynamic";

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
        let result_dynamic = await getNftDynamic(raw_data[i]['address'],network);
        let raw_data_dynamic = result_dynamic['data']['data'];
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

            volume: `${raw_data_dynamic[0]['volume']}`,
            _24h: `${(raw_data_dynamic[0]['_24hs']<0?"":"+") + (raw_data_dynamic[0]['_24hs']*100).toFixed(2)}%`,
            _7d:  `${(raw_data_dynamic[0]['_7ds']<0?"":"+") + (raw_data_dynamic[0]['_7ds']*100).toFixed(2)}%`,
            floor_price: `${raw_data_dynamic[0]['floor_price']}`,
            owners: `${raw_data_dynamic[0]['owners']}`,
            items: `${raw_data[i]['total_supply']}`,
            fXprice: `${raw_data_dynamic[0]['reference_price_low']}`,
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