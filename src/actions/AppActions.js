import Firebase from '../Firebase';
import {
  SWITCH_MODE,
  VALOR_LEITURA,
  VALUE_SWITCH,
  VALUE_POTENCIA,
  VALUE_CORRENTE,
  VALOR_DINHEIRO,
} from './types';

export const valor_Potencia = () => {
  return dispatch => {
    Firebase.database()
      .ref('/PotenciaAtual/')
      .on('value', snapshot => {
        dispatch({type: VALUE_POTENCIA, payload: snapshot.val()});
      });
  };
};

export const valor_Corrente = () => {
  return dispatch => {
    Firebase.database()
      .ref('/CorrenteAtual/')
      .on('value', snapshot => {
        dispatch({type: VALUE_CORRENTE, payload: snapshot.val()});
      });
  };
};

export const valorLeitura = () => {
  return dispatch => {
    Firebase.database()
      .ref('/Consumo(Kwh)/')
      .on('value', snapshot => {
        dispatch({type: VALOR_LEITURA, payload: snapshot.val()});
      });

    Firebase.database()
      .ref('/Consumo(Dinheiro)/')
      .on('value', snapshot => {
        dispatch({type: VALOR_DINHEIRO, payload: snapshot.val()});
      });
  };
};

export const valor_Switch = () => {
  return dispatch => {
    Firebase.database()
      .ref('/switch/')
      .on('value', snapshot => {
        dispatch({type: VALUE_SWITCH, payload: snapshot.val()});
      });
  };
};

export const change_switch = value => {
  return dispatch => {
    Firebase.database()
      .ref('/switch/')
      .set(value);
  };
};
