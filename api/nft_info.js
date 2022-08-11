import request from "./service";

export const getNftInfo = (network) => {
    return request({
        url: '/nft_info',
        method: 'get',
        params: {
            'network': network
        }
    })
}

export const getNftInfoByProject = (project, network) => {
    return request({
        url: '/nft_info_by_project',
        method: 'get',
        params: {
            'project': project,
            'network': network
        }
    })
}

export const getNftImages = (address, token_id_str, network) => {
    return request({
        url: 'nft_images',
        method: 'get',
        params: {
            address, token_id_str, network
        }
    })
}

export const getUri = (uri) => {
    return request({
        url: '/help_get',
        method: 'get',
        params:{
            'url': uri
        }
    })
}