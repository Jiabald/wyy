import request from './request.js'

export function getTopBanners() {
    return request({
        url: '/banner'
    })
}