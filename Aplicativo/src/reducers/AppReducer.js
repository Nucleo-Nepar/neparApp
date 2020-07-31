import _ from 'lodash';

import {
  SWITCH_MODE,
  VALOR_LEITURA,
  VALUE_SWITCH,
  VALUE_POTENCIA,
  VALUE_CORRENTE,
  VALOR_DINHEIRO,
} from '../actions/types';

const INITIAL_STATE = {
  consumoKwh: '',
  consumoDinheiro: '',
  switchValue: true,
  potencia: '',
  corrente: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VALOR_LEITURA:
      return {...state, consumoKwh: action.payload};
    case SWITCH_MODE:
      return {...state, switchValue: action.payload};
    case VALUE_SWITCH:
      return {...state, switchValue: action.payload};
    case VALUE_POTENCIA:
      return {...state, potencia: action.payload};
    case VALUE_CORRENTE:
      return {...state, corrente: action.payload};
    case VALOR_DINHEIRO:
      return {...state, consumoDinheiro: action.payload};
  }
  return state;
};
