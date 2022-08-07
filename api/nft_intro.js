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

export const getNftIntroByProject = (project, network) => {
    return request({
        url: '/nft_intro_by_project',
        method: 'get',
        params: {
            'project': project,
            'network': network
        }
    })
}