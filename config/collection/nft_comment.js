import { getNftComment, getNftReply, postNftComment, postNftReply } from "@/api/furion_comment";
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
            'show': false,
            'show_reply': false,
        },
        {
            'id': 99,
            'address': '0x',
            'token_id': 99,
            'content': 'Loading',
            'from_uid': 'user loading',
            'created_time': 'now',
            'show': false,
            'show_reply': false,
        },
        {
            'id': 99,
            'address': '0x',
            'token_id': 99,
            'content': 'Loading',
            'from_uid': 'user loading',
            'created_time': 'now',
            'show': false,
            'show_reply': false,
        }
    ],
};
export const initNftComment = async (network,nft_address,token_id) => {
    let comment_info = { comment_init: false, comment_list: [] };
    let result = await getNftComment(network,nft_address,token_id);
    // console.log('NFT info request', result);
    let raw_data = result['data']['data'];
    let final_result = [];
    // console.log(raw_data)

    for (let i = raw_data.length-1; i >= 0; i--) {
        let temp = {
            id: raw_data[i][0],
            address: nft_address,
            token_id: token_id,
            content: raw_data[i][3],
            from_uid: raw_data[i][4],
            from_avatar: raw_data[i][5],
            reply_count: raw_data[i][6],
            created_time: raw_data[i][7].substring(0,10),
            show: false,
            show_reply: false,
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
        from_avatar: "None",
        to_uid: "ueser loading",
        to_avatar: "None",
        created_time: "now",
    },
    {
        id: "99",
        comment_id: "99",
        reply_id: "99",
        reply_type: "comment",
        content: "Loading",
        from_uid: "ueser loading",
        from_avatar: "None",
        to_uid: "ueser loading",
        to_avatar: "None",
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

    for (let i = raw_data.length-1; i >= 0; i--) {
        let temp = {
            id: raw_data[i][0],
            comment_id: comment_id,
            reply_id: raw_data[i][2],
            reply_type: raw_data[i][3],
            content: raw_data[i][4],
            from_uid: raw_data[i][5],
            from_avatar: raw_data[i][6],
            to_uid: raw_data[i][7],
            to_avatar: raw_data[i][8],
            created_time: raw_data[i][9].substring(0,10),
        };
        console.log(temp)
        final_result.push(temp);
    }

    // console.log(final_result)


    reply_info.reply_list = final_result;
    reply_info.init = true;
    return reply_info;
}

export const intoNftComment = async (data) => {
    axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
        let res = await postNftComment(data);
        return res;
}

export const intoNftReply = async (data) => {
    axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
        let res = await postNftReply(data);
        return res;
}