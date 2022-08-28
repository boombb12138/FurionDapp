import request from "./service";

export const getNftActivity = (network, nft_address, token_id) => {
    return request({
        url: '/furion_activity',
        method: 'get',
        params:{
            network, nft_address, token_id
        }
    })
}

export const postNftActivity = (data) => {
    return request({
        url: "/into_activity",
        method: "post",
        params: data,
      });
}