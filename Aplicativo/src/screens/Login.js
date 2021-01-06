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
    return (
      <StyledButton onPress={() => _autenticaUsuario()}>
        <StyledText>Acessar</StyledText>
      </StyledButton>
    );
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
  margin-top: 15px;
  font-size: 20px;
  height: 45px;
  color: ${COLORS.textColor};
  font-family: 'Spartan';
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
});

export default connect(
  mapStatetoProps,
  {modificaEmail, modificaSenha, autenticarUsuario},
)(Login);
