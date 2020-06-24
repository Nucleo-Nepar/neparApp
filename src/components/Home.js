import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import _ from 'lodash';

import Drawer from './Drawer';
import {connect} from 'react-redux';
import {valorLeitura} from './../actions/AppActions';

class HomeScreen extends Component {
  UNSAFE_componentWillMount() {
    this.props.valorLeitura();
  }

  render() {
    return (
      <View style={style.flex}>
        <View style={style.header}>
          <Text style={style.headerText}>NeparAPP</Text>
        </View>
        <View style={style.card}>
          <View style={style.top}>
            <Text style={style.topText}>Gasto de Energia</Text>
          </View>
          <View style={style.mid}>
            <Text style={style.dispositivo}>Lâmpada X</Text>
            <View style={style.circle}>
              <Text style={style.text}>Corrente atual:</Text>
              <Text style={style.valor}>{this.props.valor_leitura}</Text>
            </View>
          </View>
          <View style={style.bottom}>
            <Text />
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  valor_leitura: state.AppReducer.valor_leitura,
});

export default connect(
  mapStateToProps,
  {valorLeitura},
)(HomeScreen);

const style = StyleSheet.create({
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    justifyContent: 'center',
    fontSize: 23,
    fontFamily: 'Quicksand-Regular',
  },
  flex: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  mid: {
    flex: 4,
    marginTop: 15,
    alignItems: 'center',
  },
  dispositivo: {
    fontSize: 20,
    padding: 10,
  },
  bottom: {
    flex: 1,
  },
  circle: {
    marginTop: 40,
    width: 200,
    height: 200,
    alignItems: 'center',
    backgroundColor: '#3BA3D1',
    borderRadius: 100,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#3BA3D1',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  headerText: {
    fontSize: 20,
    color: '#f0edf6',
    textShadowColor: '#000',
    textShadowOffset: {width: -0.5, height: 0.5},
    textShadowRadius: 10,
  },
  card: {
    backgroundColor: '#f0edf6',
    flex: 1,
    margin: 10,
    marginBottom: 0,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    elevation: 5,
  },
  text: {
    fontSize: 25,
    color: '#f0edf6',
  },
  valor: {
    fontSize: 30,
    marginTop: 35,
    color: '#f0edf6',
  },
});
