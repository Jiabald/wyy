import React, { memo, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import NavBar from '@/components/nav-bar'
import { HeaderCategory } from './style.js'
import request from '@/services/request'
export default memo(function LJDiscover(props) {

    useEffect(() => {
        request({
            url: '/banner'
        }).then(res => {
            console.log(res)
        })
    }, [])

    const { route } = props

    return (
        <HeaderCategory>
            <NavBar />
            { renderRoutes(route.routes)}
        </HeaderCategory>
    )
})