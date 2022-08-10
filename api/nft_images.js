import request from "./service";

export const getNftImages = (address, network) => {
    return request({
        url: '/nft_images',
        method: 'get',
        params: {
            'address': address,
            'network': network
        }
    })
}