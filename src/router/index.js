import React from 'react'
import LJDiscover from '@/pages/discover'
import LJFriend from '@/pages/friend'
import LJMine from '@/pages/mine'
import LJRecommend from '@/pages/discover/c-pages/recommend'
import LJRanking from '@/pages/discover/c-pages/ranking'
import LJAlbum from '@/pages/discover/c-pages/album'
import LJDjradio from '@/pages/discover/c-pages/djradio'
import LJArtist from '@/pages/discover/c-pages/artist'
import LJSongs from '@/pages/discover/c-pages/songs'
import { Redirect } from 'react-router'

const routes = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to="/discover" />
    },
    {
        path: '/discover',
        component: LJDiscover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => <Redirect to="/discover/recommend" />,
            },
            { path: '/discover/recommend', component: LJRecommend },
            { path: '/discover/ranking', component: LJRanking },
            { path: '/discover/album', component: LJAlbum },
            { path: '/discover/djradio', component: LJDjradio },
            { path: '/discover/artist', component: LJArtist },
            { path: '/discover/songs', component: LJSongs },
        ],
    },
    {
        path: '/mine',
        component: LJMine
    },
    {
        path: '/friend',
        component: LJFriend
    }
]

export default routes