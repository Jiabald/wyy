import React, { memo } from 'react'
import { SongCoverWrapper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils'

function dataItemGenerator(data, key) {
    return data ? data[key] : false

}

export default memo(function LJSongsCover(props) {

    const { info, songList, width = 140 } = props

    const picUrl = dataItemGenerator(info, 'picUrl') || dataItemGenerator(songList, 'picUrl')
    const playCount = dataItemGenerator(info, 'playCount') || dataItemGenerator(songList, 'playCount')
    const name = dataItemGenerator(info, 'name') || dataItemGenerator(songList, 'name')
    const nickname = dataItemGenerator(info, 'nickname') || dataItemGenerator(songList, 'nickname')
    // const id = dataItemGenerator(info, 'id') || dataItemGenerator(songList, 'id')

    return (
        <SongCoverWrapper width={width}>
            <div className="cover-wrapper">
                <img src={getSizeImage(picUrl, 140)} alt="" />
                <div className="cover-mask sprite_cover">
                    <div className="bottom-bar sprite_cover">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-title text-nowrap">{name}</div>
            <div className="cover-source text-nowrap">
                {(info && info.copywriter) || nickname}
            </div>
        </SongCoverWrapper>
    )
})