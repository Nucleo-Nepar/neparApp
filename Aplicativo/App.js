import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import Routes from './src/Routes'
import reducers from './src/reducers'
import logger from 'redux-logger'

export default (props) => {
  return (
    <Provider
      store={createStore(reducers, applyMiddleware(logger, ReduxThunk))}
    >
      <Routes />
    </Provider>
  )
}
