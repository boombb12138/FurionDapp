import request from "./service";

export const getFurionSwapSummary = (token_0, token_1, frequency, network) => {
    return request({
        url: '/furion_swap',
        method: 'get',
        params: {
            token_0, token_1, frequency, network
        }
    })
}