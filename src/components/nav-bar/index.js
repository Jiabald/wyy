import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { dicoverMenu } from '../../common/local-data'
import { CategoryList, NavBarWrapper } from './style'

export default memo(function NavBar() {
    return (
        <NavBarWrapper>
            <CategoryList className="w1100">
                {
                    dicoverMenu.map(item => {
                        return (
                            <li className="item" key={item.title}>
                                <NavLink to={item.link} activeClassName="menu-active">
                                    {item.title}
                                </NavLink>
                            </li>

                        )
                    })
                }
            </CategoryList>
        </NavBarWrapper>
    )
})