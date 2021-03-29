import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store'

import LJAppFooter from '@/components/app-footer'
import LJAppHeader from '@/components/app-header'


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <LJAppHeader />
        {renderRoutes(routes)}
        <LJAppFooter />
      </HashRouter>
    </Provider>
  )
})
