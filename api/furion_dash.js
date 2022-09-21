import request from "./service";

export const getNftDash = (network) => {
    return request({
        url: '/furion_dash',
        method: 'get',
        params:{
            network
        }
    })
}