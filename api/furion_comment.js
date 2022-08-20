import request from "./service";

export const getNftComment = (network, nft_address, token_id) => {
    return request({
        url: '/furion_comment',
        method: 'get',
        params:{
            network, nft_address, token_id
        }
    })
}

export const getNftReply = (network, comment_id) => {
    return request({
        url: '/furion_reply',
        method: 'get',
        params:{
            network, comment_id
        }
    })
}

export const postNftComment = (network, nft_address, token_id, content, from_uid, from_avatar, reply_count) => {
    return request({
        url:"/into_comment",
        method:"post",
        data:JSON.stringify({
            network, nft_address, token_id, content, from_uid, from_avatar, reply_count}),
        headers:{
            "Content-Type" : "application/json;charset=utf-8"
        }
      }).then(res=>{
        console.log('响应成功',res)
      },reject=>{
        console.log('响应失败',reject)
      })
}
