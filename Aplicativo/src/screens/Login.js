import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  autenticarUsuario,
} from '../actions/AutenticationActions';

import COLORS from '../assets/colors';
import logo from '../assets/imgs/logoCescuro.png';

const Login = props => {
  const renderBtnAcessar = () => {
    if (props.loading_login) {
      return <ActivityIndicator size="large" />;
    }
    return <StyledButton title="Acessar" onPress={() => _autenticaUsuario()} />;
  };

  const _autenticaUsuario = () => {
    const {email, senha} = props;
    props.autenticarUsuario({email, senha});
  };

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
  font-size: 20px;
  height: 45px;
  color: ${COLORS.textColor};
  font-family: 'Spartan';
`;

const StyledLogoContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  color: ${COLORS.textColor};
`;

const StyledImage = styled.Image`
  width: 250px;
  height: 250px;
`;

const StyledRegister = styled.TouchableHighlight``;

const StyledText = styled.Text`
  font-size: 15px;
  text-align: center;
  margin-top: 15px;
  color: ${COLORS.textColor};
  font-family: 'Spartan';
`;
const StyledError = styled.Text`
  color: red;
  font-size: 15px;
  text-align: center;
`;
const StyledView = styled.View`
  flex: 2;
`;

const StyledButton = styled.Button`
  background: ${COLORS.textColor};
  color: green;
`;

const mapStatetoProps = state => ({
  email: state.AutenticationReducer.email,
  senha: state.AutenticationReducer.senha,
  erroLogin: state.AutenticationReducer.erroLogin,
  loading_login: state.AutenticationReducer.loading_login,
});

export default connect(
  mapStatetoProps,
  {modificaEmail, modificaSenha, autenticarUsuario},
)(Login);
