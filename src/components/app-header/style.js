import styled from 'styled-components'
import sprite_01 from '@/assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
    height:75px;
    background-color:#242424;
    .content{
        height:70px;
        display:flex;
        justify-content:space-between;
    }
    .divider{
        height:5px;
        background-color:#c20c0c
    }
`

export const HeaderLeft = styled.div`
    display: flex;
    font-size: 14px;
    .select-group{
        display: flex;
        font-size: 14px;
      .select-item{
        position: relative;
        padding: 0 19px;
        height: 70px;
        text-align: center;
        line-height: 70px;
            &:hover {
            text-decoration: none;
            background-color: #000;
        }
      }
      :last-of-type {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${sprite_01});
          background-position: -192px 0;
          top: 20px;
          right: -20px;
        }
      }
      /* NavLink活跃状态 */
    .link-active {
      color: #fff;
      background-color: #000;
      /* 下面的小三角 */
      .icon {
        position: absolute;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-image: url('${sprite_01}');
        background-position: 254px 0;
      }
    }
    }
    .logo{
        text-indent: -9999px;
        display:inline-block;
        width:176px;
        height:69px;
        background-position:0 0;
    }
`

export const HeaderRight = styled.div`

display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
    .search {
      width: 158px;
      height: 32px;
      border-radius: 16px;
        input {
            font-size: 14px;
            font-family: '微软雅黑';
            &::placeholder {
            font-size: 12px;
            }
        }
      }
    .center{
      width:90px;
      height:32px;
      line-height:32px;
      text-align:center;
      border:1px solid #666;
      border-radius:16px;
      margin:0 12px;
    }
    
`