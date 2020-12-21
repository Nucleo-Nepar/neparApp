import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';
import styled from 'styled-components';

import {connect} from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  autenticarUsuario,
} from '../actions/AutenticationActions';

import COLORS from '../assets/colors';
import logo from '../assets/imgs/logoCescuro.png';

class Login extends Component {
  _autenticaUsuario() {
    const {email, senha} = this.props;
    this.props.autenticarUsuario({email, senha});
  }

  renderBtnAcessar() {
    if (this.props.loading_login) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <Button
        title="Acessar"
        color="#115E54"
        onPress={() => this._autenticaUsuario()}
      />
    );
  }

  render() {
    return (
      <StyledBackground>
        <StyledLogoContainer>
          <StyledImage source={logo} />
        </StyledLogoContainer>
        <View style={styles.flex2}>
          <StyledInput
            value={this.props.email}
            placeholder="E-mail"
            placeholderTextColor={COLORS.textColor}
            underlineColorAndroid={COLORS.textColor}
            onChangeText={texto => this.props.modificaEmail(texto)}
          />
          <StyledInput
            secureTextEntry
            value={this.props.senha}
            placeholder="Senha"
            placeholderTextColor={COLORS.textColor}
            underlineColorAndroid={COLORS.textColor}
            onChangeText={texto => this.props.modificaSenha(texto)}
          />
          <Text style={styles.erro}>{this.props.erroLogin}</Text>
          <StyledRegister
            onPress={() => this.props.navigation.navigate('register')}>
            <StyledText value={this.props.senha} style={styles.cadastrar}>
              Ainda não tem cadastro? Cadastre-se
            </StyledText>
          </StyledRegister>
        </View>
        <View style={styles.flex2}>{this.renderBtnAcessar()}</View>
      </StyledBackground>
    );
  }
}

const StyledBackground = styled.View`
  flex: 1;
  padding: 20px;
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

const styles = StyleSheet.create({
  view: {flex: 1, padding: 10},
  flex2: {flex: 2, justifyContent: 'center'},
  erro: {color: 'red', fontSize: 18, textAlign: 'center'},
});

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
