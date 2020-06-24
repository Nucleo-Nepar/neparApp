import _ from 'lodash';

import {MODIFICA_DRAWER, VALOR_LEITURA} from '../actions/types';

const INITIAL_STATE = {
  drawer_open: 'false',
  valor_leitura: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_DRAWER:
      return {...state, drawer_open: true};
    case VALOR_LEITURA:
      return {...state, valor_leitura: _.first(_.values(action.payload))};
  }
  return state;
};
