import React, {Component} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario,
} from '../actions/AutenticationActions';

class Register extends Component {
  _cadastraUsuario() {
    const {nome, email, senha} = this.props;

    this.props.cadastraUsuario({nome, email, senha});
  }

  renderBtnCadastro() {
    if (this.props.loading_cadastro) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <Button
        title="Cadastrar"
        color="#115E54"
        onPress={() => this._cadastraUsuario()}
      />
    );
  }

  render() {
    return (
      <View>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <TextInput
              value={this.props.nome}
              placeholder="Nome"
              placeholderTextColor="#fff"
              style={styles.inputs}
              onChangeText={texto => this.props.modificaNome(texto)}
            />
            <TextInput
              value={this.props.email}
              placeholder="E-mail"
              placeholderTextColor="#fff"
              style={styles.inputs}
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextInput
              value={this.props.senha}
              secureTextEntry
              placeholder="Senha"
              placeholderTextColor="#fff"
              style={styles.inputs}
              onChangeText={texto => this.props.modificaSenha(texto)}
            />
            <Text style={styles.erro}>{this.props.erroCadastro}</Text>
          </View>
          <View style={{flex: 1}}>{this.renderBtnCadastro()}</View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputs: {fontSize: 20, height: 45, color: '#fff'},
  view1: {flex: 1, padding: 10},
  view2: {flex: 4, justifyContent: 'center'},
  erro: {color: 'red', fontSize: 18, textAlign: 'center'},
});

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
