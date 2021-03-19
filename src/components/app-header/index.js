import React, { memo } from 'react'
import { headerLinks } from '@/common/local-data'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import {
  HeaderLeft,
  HeaderRight,
  HeaderWrapper
}
  from './style'
export default memo(function LJAppHeader() {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink exact to={item.link} activeClassName="link-active">{item.title}
          <i className="icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>{item.title}
          <i className="icon"></i>
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content w980">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">1</a>
          <div className="select-group">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={index} className="select-item">
                    { showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>

      </div>

      <div className="divider"></div>
    </HeaderWrapper>
  )
})