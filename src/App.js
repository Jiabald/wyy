import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import LJAppFooter from '@/components/app-footer'
import LJAppHeader from '@/components/app-header'


export default memo(function App() {
  return (
    <HashRouter>
      <LJAppHeader />
      { renderRoutes(routes)}
      <LJAppFooter />
    </HashRouter>
  )
})
