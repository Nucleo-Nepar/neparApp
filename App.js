/**
 * Fonte do aplicativo, onde as principais importações são feitas e o escopo do
 * app mantido, como exemplo as rotas entre as cenas(telas) do aplicativo e
 * também as varíaveis globais os principais dados são emcaminhados para que
 * todos os componentes do aplicativo como por exemplo dados do usuários.
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import Routes from './src/Routes';
import reducers from './src/reducers';
import logger from 'redux-logger';

export default props => {
  return (
    <Provider
      store={createStore(reducers, applyMiddleware(logger, ReduxThunk))}>
      <Routes />
    </Provider>
  );
};
