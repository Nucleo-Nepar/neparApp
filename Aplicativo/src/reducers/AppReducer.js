import {
  VALOR_LEITURA,
  VALUE_SWITCH,
  VALUE_POTENCIA,
  VALUE_CORRENTE,
  VALOR_DINHEIRO,
  LIGHT_SWITCH
} from '../actions/types'

const INITIAL_STATE = {
  consumoKwh: '',
  consumoDinheiro: '',
  switchValue: null,
  potencia: '',
  corrente: '',
  laboratorio: {},
  todas: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VALOR_LEITURA:
      return { ...state, consumoKwh: action.payload }
    case LIGHT_SWITCH:
      return { ...state, laboratorio: action.payload }
    case VALUE_SWITCH:
      return { ...state, switchValue: action.payload }
    case VALUE_POTENCIA:
      return { ...state, potencia: action.payload }
    case VALUE_CORRENTE:
      return { ...state, corrente: action.payload }
    case VALOR_DINHEIRO:
      return { ...state, consumoDinheiro: action.payload }
  }
  return state
}
