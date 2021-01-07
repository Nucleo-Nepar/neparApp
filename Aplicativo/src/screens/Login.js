import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import Firebase from '../Firebase';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  autenticarUsuario,
  signIn,
  signOut,
} from '../actions/AutenticationActions';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import COLORS from '../assets/colors';
import logo from '../assets/imgs/logoCescuro.png';

const Login = props => {
  const renderBtnAcessar = () => {
    if (props.loading_login) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <StyledButton onPress={() => _autenticaUsuario()}>
        <StyledText>Acessar</StyledText>
      </StyledButton>
    );
  };

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      console.log('antes');
      const userInfo = await GoogleSignin.signIn();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow

        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
        console.log('aqui');
      }
    }
  };

  const _autenticaUsuario = () => {
    const {email, senha} = props;
    props.autenticarUsuario({email, senha});
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '889249922790-kgfkud9quvf5uq5533qajv5tosqcnc0b.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  return (
    <StyledBackground>
      <StyledLogoContainer>
        <StyledImage source={logo} />
      </StyledLogoContainer>
      <StyledView>
        <StyledInput
          value={props.email}
          placeholder="E-mail"
          placeholderTextColor={COLORS.textColor}
          underlineColorAndroid={COLORS.textColor}
          onChangeText={texto => props.modificaEmail(texto)}
        />
        <StyledInput
          secureTextEntry
          value={props.senha}
          placeholder="Senha"
          placeholderTextColor={COLORS.textColor}
          underlineColorAndroid={COLORS.textColor}
          onChangeText={texto => props.modificaSenha(texto)}
        />
        <StyledView>
          <StyledSignin>
            <GoogleSigninButton
              style={{width: 192, height: 48}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={() => _signIn()}
            />
          </StyledSignin>
          <StyledView>
            {!props.loggedIn && (
              <StyledText>You are currently logged out</StyledText>
            )}
            {props.loggedIn && (
              <StyledButton
                onPress={() => props.signOut()}
                title="LogOut"
                color="red"
              />
            )}
          </StyledView>
        </StyledView>
        <StyledError>{props.erroLogin}</StyledError>
        <StyledRegister onPress={() => props.navigation.navigate('register')}>
          <StyledText value={props.senha}>
            Ainda não tem cadastro? Cadastre-se
          </StyledText>
        </StyledRegister>
      </StyledView>
      <StyledView>{renderBtnAcessar()}</StyledView>
    </StyledBackground>
  );
};

const StyledBackground = styled.View`
  flex: 1;
  padding: 25px;
  background-color: ${COLORS.background};
  color: ${COLORS.textColor};
`;

const StyledInput = styled.TextInput`
  margin-top: 15px;
  font-size: 20px;
  height: 45px;
  color: ${COLORS.textColor};
  font-family: 'Spartan';
`;

const StyledSignin = styled.View`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const StyledLogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  color: ${COLORS.textColor};
`;

const StyledImage = styled.Image`
  width: 250px;
  height: 250px;
  margin-top: 15px;
`;

const StyledRegister = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 15px;
  text-align: center;
  color: ${COLORS.textColor};
  font-family: 'Spartan';
`;
const StyledError = styled.Text`
  color: red;
  font-size: 15px;
  text-align: center;
  margin-bottom: 5px;
`;
const StyledView = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  background-color: #001d46;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 13px;
  padding: 0px 15px 0px 15px;
`;

const mapStatetoProps = state => ({
  email: state.AutenticationReducer.email,
  senha: state.AutenticationReducer.senha,
  erroLogin: state.AutenticationReducer.erroLogin,
  loading_login: state.AutenticationReducer.loading_login,
  loggedIn: state.AutenticationReducer.loggedIn,
  setLoggedIn: state.AutenticationReducer.setLoggedIn,
  userInfo: state.AutenticationReducer.userInfo,
  setUserInfo: state.AutenticationReducer.setUserInfo,
});

export default connect(
  mapStatetoProps,
  {modificaEmail, modificaSenha, autenticarUsuario, signOut, signIn},
)(Login);
