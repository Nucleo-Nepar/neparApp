import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRO_USUARIO_SUCESSO,
  CADASTRO_USUARIO_ERRO,
  LOGIN_EM_ANDAMENTO,
  CADASTRO_EM_ANDAMENTO,
  LOGIN_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  GET_USER_INFO,
  SIGN_OUT,
  SIGN_IN,
} from '../actions/types';

const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  erroCadastro: '',
  erroLogin: '',
  loading_login: false,
  loading_cadastro: false,
  loggedIn: false,
  userInfo: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_EMAIL:
      return {...state, email: action.payload};
    case MODIFICA_SENHA:
      return {...state, senha: action.payload};
    case MODIFICA_NOME:
      return {...state, nome: action.payload};
    case CADASTRO_USUARIO_ERRO:
      return {...state, erroCadastro: action.payload, loading_cadastro: false};
    case CADASTRO_USUARIO_SUCESSO:
      return {...state, nome: '', senha: '', loading_cadastro: action.payload};
    case LOGIN_USUARIO_ERRO:
      return {...state, erroLogin: action.payload, loading_login: false};
    case LOGIN_EM_ANDAMENTO:
      return {...state, loading_login: true};
    case LOGIN_USUARIO_SUCESSO:
      return {...state, ...INITIAL_STATE};
    case CADASTRO_EM_ANDAMENTO:
      return {...state, loading_cadastro: true};
    case SIGN_IN:
      return {...state, loggedIn: true};
    case SIGN_OUT:
      return {...state, loggedIn: false, userInfo: {}};
    case GET_USER_INFO:
      return {...state, userInfo: action.payload};
  }

  return state;
};
