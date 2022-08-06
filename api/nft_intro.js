import request from "./service";

export const getNftIntro = (network) => {
    return request({
        url: '/nft_intro',
        method: 'get',
        params: {
            'network': network
        }
    })
}