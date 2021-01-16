import Firebase from '../Firebase'
import b64 from 'base-64'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin'
import auth from '@react-native-firebase/auth'
import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRO_USUARIO_SUCESSO,
  CADASTRO_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO,
  LOGIN_EM_ANDAMENTO,
  CADASTRO_EM_ANDAMENTO,
  GET_USER_INFO,
  SIGN_OUT,
  SIGN_IN,
} from './types'

export const modificaEmail = (texto) => {
  return {
    type: MODIFICA_EMAIL,
    payload: texto,
  }
}

export const modificaSenha = (texto) => {
  return {
    type: MODIFICA_SENHA,
    payload: texto,
  }
}

export const modificaNome = (texto) => {
  return {
    type: MODIFICA_NOME,
    payload: texto,
  }
}

export const onAuthStateChanged = (user) => {
  if (user !== {}) {
  }
}

const getCurrentUser = async () => {
  return {
    type: GET_USER_INFO,
    payload: 'teste',
  }
}

export const configureGoogleSign = () => {
  GoogleSignin.configure({
    webClientId:
      '889249922790-kgfkud9quvf5uq5533qajv5tosqcnc0b.apps.googleusercontent.com',
    offlineAccess: true,
  })
}

export const signIn = async (redireciona) => {
  try {
    await GoogleSignin.hasPlayServices()
    const { accessToken, idToken } = await GoogleSignin.signIn()
    const credential = auth.GoogleAuthProvider.credential(idToken, accessToken)
    await auth().signInWithCredential(credential)
    const currentUser = await GoogleSignin.getCurrentUser()
    redireciona()
    return { type: SIGN_IN, payload: true }
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('Process Cancelled')
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('Process in progress')
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Play services are not available')
    } else {
      console.log('Something else went wrong... ', error.toString())
    }
  }
}

export const signOut = (redireciona) => {
  return (dispatch) => {
    GoogleSignin.revokeAccess()
    GoogleSignin.signOut()
    redireciona()
    dispatch({ type: SIGN_OUT })
  }
}

export const cadastraUsuario = ({ nome, email, senha }) => {
  return (dispatch) => {
    dispatch({ type: CADASTRO_EM_ANDAMENTO })

    Firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((user) => {
        var emailB64 = b64.encode(email)

        Firebase.database()
          .ref(`/contatos/ ${emailB64}`)
          .push({ nome })
          .then((value) => cadastroUsuarioSucesso(dispatch))
      })
      .catch((erro) => cadastroUsuarioErro(erro, dispatch))
  }
}

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch({
    type: CADASTRO_USUARIO_SUCESSO,
    payload: false,
  })
}

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({
    type: CADASTRO_USUARIO_ERRO,
    payload: erro.message,
  })
}

export const autenticarUsuario = ({ email, senha }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_EM_ANDAMENTO })

    Firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .then((value) => loginUsuarioSucesso(dispatch))
      .catch((erro) => loginUsuarioErro(erro, dispatch))
  }
}

const loginUsuarioSucesso = (dispatch) => {
  dispatch({
    type: LOGIN_USUARIO_SUCESSO,
  })
}

const loginUsuarioErro = (erro, dispatch) => {
  dispatch({
    type: LOGIN_USUARIO_ERRO,
    payload: erro.message,
  })
}
