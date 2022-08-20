import { getNftComment, getNftReply, postNftComment } from "@/api/furion_comment";
import axios from 'axios'

export const nft_comment = {
    init: false,
    comment_list: [
        {
            'id': 99,
            'address': '0x',
            'token_id': 99,
            'content': 'Loading',
            'from_uid': 'user loading',
            'created_time': 'now',
        },
        {
            'id': 99,
            'address': '0x',
            'token_id': 99,
            'content': 'Loading',
            'from_uid': 'user loading',
            'created_time': 'now',
        },
        {
            'id': 99,
            'address': '0x',
            'token_id': 99,
            'content': 'Loading',
            'from_uid': 'user loading',
            'created_time': 'now',
        }
    ],
};
export const initNftComment = async (network,nft_address,token_id) => {
    let comment_info = { comment_init: false, comment_list: [] };
    let result = await getNftComment(network,nft_address,token_id);
    // console.log('NFT info request', result);
    let raw_data = result['data']['data'];
    let final_result = [];
    console.log(raw_data)

    for (let i = 0; i < raw_data.length; i++) {
        let temp = {
            id: raw_data[i][0],
            address: nft_address,
            token_id: token_id,
            content: raw_data[i][3],
            from_uid: raw_data[i][4],
            from_avatar: raw_data[i][5],
            reply_count: raw_data[i][6],
            created_time: raw_data[i][7].substring(0,10),
        };
        final_result.push(temp);
    }

    // console.log(final_result)


    comment_info.comment_list = final_result;
    comment_info.init = true;
    return comment_info;
}


export const nft_reply = {
    init: false,
    reply_list: [
    {
        id: "99",
        comment_id: "99",
        reply_id: "99",
        reply_type: "comment",
        content: "Loading",
        from_uid: "ueser loading",
        to_uid: "ueser loading",
        created_time: "now",
    },
    {
        id: "99",
        comment_id: "99",
        reply_id: "99",
        reply_type: "comment",
        content: "Loading",
        from_uid: "ueser loading",
        to_uid: "ueser loading",
        created_time: "now",
    }

]
};
export const initNftReply = async (network,comment_id) => {
    let reply_info = { reply_init: false, reply_list: [] };

    let result = await getNftReply(network,comment_id);
    // console.log('NFT info request', result);
    let raw_data = result['data']['data'];
    let final_result = [];

    for (let i = 0; i < raw_data.length; i++) {
        let temp = {
            id: raw_data[i]['id'],
            comment_id: comment_id,
            reply_id: raw_data[i]['reply_id'],
            reply_type: raw_data[i]['reply_type'],
            content: raw_data[i]['content'],
            from_uid: raw_data[i]['from_uid'],
            to_uid: raw_data[i]['to_uid'],
            created_time: raw_data[i]['created_time'],
        };
        final_result.push(temp);
    }

    // console.log(final_result)


    reply_info.reply_list = final_result;
    reply_info.init = true;
    return reply_info;
}


export const intoNftComment = (network, nft_address, token_id, content, from_uid='anonymous', from_avatar='None', reply_count=0) => {
    const data = { network: network, nft_address: nft_address, token_id: token_id, content: content, from_uid: from_uid, from_avatar: from_avatar, reply_count: reply_count };
    console.log(data)
    const response = axios.post("http://127.0.0.1:6010/into_comment", data)
    console.log(response);
}