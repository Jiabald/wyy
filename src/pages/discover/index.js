import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import NavBar from '@/components/nav-bar'
import { HeaderCategory } from './style.js'

export default memo(function LJDiscover(props) {

    const { route } = props

    return (
        <HeaderCategory>
            <NavBar />
            { renderRoutes(route.routes)}
        </HeaderCategory>
    )
})