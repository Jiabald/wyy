import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendAction } from '../../store/actionCreators'

import { HotRecommendWrapper } from './style'
import LJThemeHeaderRcm from '@/components/theme-header-rcm'
import LJSongsCover from '@/components/songs-cover'
export default memo(function LJHotRecommend() {
    // state
    // redux hooks
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }), shallowEqual)
    const dispatch = useDispatch()

    // 其他hooks
    useEffect(() => {
        dispatch(getHotRecommendAction(8))
    }, [dispatch])

    return (
        <HotRecommendWrapper>
            <LJThemeHeaderRcm title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
            <div className="recommend-list">
                {
                    hotRecommends.map(item => {
                        return <LJSongsCover info={item} key={item.id} />
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})