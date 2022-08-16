import { getNftInfo, getNftInfoByProject, getNftImages, getNftWeekPrice, getNftInfoRanking } from "@/api/nft_info";
import getCharts from "@/utils/getCharts";


export const initNftInfo = async (network, loadWeek) => {
    if (nft_info.nft_list.length > 0) {
        return
    }
    let result = await getNftInfo(network);
    // console.log('NFT info request', result);
    let raw_data = result['data']['data'];
    let final_result = [];

    for (let i = 0; i < raw_data.length; i++) {
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

            volume: raw_data[i]['volume'],
            _24h: `${(raw_data[i]['_24hs'] < 0 ? "" : "+") + (raw_data[i]['_24hs'] * 100).toFixed(2)}%`,
            _7d: `${(raw_data[i]['_7ds'] < 0 ? "" : "+") + (raw_data[i]['_7ds'] * 100).toFixed(2)}%`,
            floor_price: raw_data[i]['floor_price'],
            owners: raw_data[i]['owners'],
            items: raw_data[i]['total_supply'],
            fXprice: raw_data[i]['reference_price_high'],
            last7Days: raw_data[i]['week_price'],
            last7Days_type: raw_data[i]['type'],
        };
        final_result.push(temp);
    }
    final_result = final_result.map((item) => {
        return {
            ...item,
            option: getCharts(item.last7Days, item.last7Days_type)
        };
    });

    console.log(final_result)


    nft_info.nft_list = final_result;
    nft_info.init = true;
}