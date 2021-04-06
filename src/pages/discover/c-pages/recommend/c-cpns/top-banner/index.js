import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'
import { Carousel } from 'antd'
import {
    BannerWrapper,
    BannerControl,
    BannerRight,
    BannerLeft
} from './style'
export default memo(function LJTopBanner() {
    // 组件内state
    const [currentIndex, setCurrentIndex] = useState(0)


    // redux hooks 代码逻辑
    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual)

    const dispatch = useDispatch();

    // 其他hooks
    const bannerRef = useRef()
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])
    const bannerChange = useCallback((form, to) => {
        setCurrentIndex(to)
    }, [])

    // 其他代码逻辑
    const bannerImgUrl = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'

    return (
        <BannerWrapper bgImage={bannerImgUrl}>
            <div className="banner w980">
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map(item => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})