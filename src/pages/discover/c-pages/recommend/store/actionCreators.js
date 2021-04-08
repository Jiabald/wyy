import * as actionTypes from './constants.js'

import { getTopBanners, getHotRecommends } from '@/services/recommend'

const changeTopBannersAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNER,
    topBanners: res.banners
})

const changeHotRecommend = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            // console.log(res)
            dispatch(changeTopBannersAction(res))
        })
    }
}

export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            // console.log(res)
            dispatch(changeHotRecommend(res))
        })
    }
}