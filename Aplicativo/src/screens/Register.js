import React from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario,
} from '../actions/AutenticationActions';

import COLORS from '../assets/colors';

const Register = props => {
  const _cadastraUsuario = () => {
    const {nome, email, senha} = props;

    props.cadastraUsuario({nome, email, senha});
  };

  const renderBtnCadastro = () => {
    if (props.loading_cadastro) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <StyledButton onPress={() => _cadastraUsuario()}>
        <StyledText>Cadastrar</StyledText>
      </StyledButton>
    );
  };
  return (
    <StyledContainer>
      <StyledView>
        <StyledTextRegister>Cadastrar-se</StyledTextRegister>
      </StyledView>
      <StyledViewInput>
        <StyledInput
          value={props.nome}
          placeholder="Nome"
          placeholderTextColor={COLORS.textColor}
          underlineColorAndroid={COLORS.textColor}
          onChangeText={texto => props.modificaNome(texto)}
        />
        <StyledInput
          value={props.email}
          placeholder="E-mail"
          placeholderTextColor={COLORS.textColor}
          underlineColorAndroid={COLORS.textColor}
          onChangeText={texto => props.modificaEmail(texto)}
        />
        <StyledInput
          value={props.senha}
          secureTextEntry
          placeholder="Senha"
          placeholderTextColor={COLORS.textColor}
          underlineColorAndroid={COLORS.textColor}
          onChangeText={texto => props.modificaSenha(texto)}
        />
        <StyledError>{props.erroCadastro}</StyledError>
      </StyledViewInput>
      <StyledView>{renderBtnCadastro()}</StyledView>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${COLORS.background};
`;

const StyledView = styled.View`
  display: flex;
  flex: 2;
  justify-content: center;
`;

const StyledInput = styled.TextInput`
  margin-top: 15px;
  font-size: 20px;
  height: 45px;
  color: ${COLORS.textColor};
  font-family: 'Spartan';
`;

const StyledError = styled.Text`
  color: red;
  font-size: 15px;
  text-align: center;
  margin-bottom: 5px;
`;

const StyledViewInput = styled.View`
  display: flex;
  flex: 1;
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
  padding: 0px 25px 0px 25px;
`;

const StyledText = styled.Text`
  font-size: 15px;
  text-align: center;
  color: ${COLORS.textColor};
  font-family: 'Spartan';
`;

const StyledTextRegister = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${COLORS.textColor};
  font-family: 'Spartan';
`;

const mapStateToProps = state => ({
  nome: state.AutenticationReducer.nome,
  email: state.AutenticationReducer.email,
  senha: state.AutenticationReducer.senha,
  erroCadastro: state.AutenticationReducer.erroCadastro,
  loading_cadastro: state.AutenticationReducer.loading_cadastro,
});

export default connect(
  mapStateToProps,
  {modificaEmail, modificaSenha, modificaNome, cadastraUsuario},
)(Register);
