import request from "./service";

export const getNftDynamic = (address, network) => {
    return request({
        url: '/nft_dynamic',
        method: 'get',
        params: {
            'address': address,
            'network': network
        }
    })
}