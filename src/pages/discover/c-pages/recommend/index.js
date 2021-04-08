import React, { memo } from 'react'
import LJTopBanner from './c-cpns/top-banner'
import LJHotRecommend from './c-cpns/hot-recommend'
import LJNewAlbum from './c-cpns/new-album'
import LJRecommendRanking from './c-cpns/recommend-ranking'
import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style'

function LJRacommend(props) {
    return (
        <RecommendWrapper>
            <LJTopBanner />
            <Content className="w980">
                <RecommendLeft>
                    <LJHotRecommend />
                    <LJNewAlbum />
                    <LJRecommendRanking />
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}


export default memo(LJRacommend)


// function LJRacommend(props) {

//     const { getBanners, topBanners } = props

//     useEffect(() => {
//         getBanners()
//     }, [getBanners])
//     return (
//         <div>
//             racommend{ topBanners.length}
//         </div>
//     )
// }

// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(LJRacommend))