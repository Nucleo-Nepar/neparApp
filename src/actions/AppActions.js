import Firebase from '../Firebase';
import {MODIFICA_DRAWER, VALOR_LEITURA} from './types';

export const modificaDrawer = () => {
  return {
    type: MODIFICA_DRAWER,
  };
};

export const valorLeitura = () => {
  return dispatch => {
    Firebase.database()
      .ref('/correnteAtual/')
      .on('value', snapshot => {
        dispatch({type: VALOR_LEITURA, payload: snapshot.val()});
      });
  };
};
