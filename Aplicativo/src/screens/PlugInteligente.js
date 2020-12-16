import React, {Component} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {LineChart, YAxis, Grid, XAxis} from 'react-native-svg-charts';

import {connect} from 'react-redux';
import {
  valorLeitura,
  change_switch,
  valor_Switch,
  valor_Corrente,
  valor_Potencia,
} from '../actions/AppActions';

class PlugInteligente extends Component {
  // UNSAFE_componentWillMount() {
  //   this.props.valorLeitura();
  //   this.props.valor_Switch();
  //   this.props.valor_Corrente();
  //   this.props.valor_Potencia();
  // }

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.props.switchValue = value;
    this.props.change_switch(value);
    //state changes according to switch
    //which will result in re-render the text
  };

  render() {
    const data = [0, 10, 40, 25, 17];
    const dataDia = [1, 2, 3, 4, 5, 6];
    const dia = 10;
    const contentInset = {top: 20, bottom: 20};
    const contentInsetdia = {top: 20, left: 50, bottom: 20};

    return (
      <View style={style.flex}>
        <View style={style.card}>
          <View style={style.header}>
            <Text style={style.headerText}>Plug Inteligente</Text>
          </View>
          <View style={style.top}>
            <View>
              <Text style={style.topText}>Consumo Diario:</Text>
              <Text style={style.consumo}>
                R$ {this.props.consumoDinheiro.ConsumoReais}
              </Text>
            </View>
            <View>
              <Text style={style.topText}>Consumo Mensal:</Text>
              <Text style={style.consumo}>R$ 115,23</Text>
            </View>
          </View>
          <View style={style.mid}>
            <Text style={style.dispositivo}>Gráfico Diário:</Text>
            <View style={{height: 200, flexDirection: 'row'}}>
              <YAxis
                style={{width: 30}}
                data={data}
                contentInset={contentInset}
                svg={{
                  fill: '#f0edf6',
                  fontSize: 10,
                }}
                numberOfTicks={10}
                formatLabel={value => `R$${value}`}
              />
              <LineChart
                style={{flex: 1, marginLeft: 20, marginRight: 15}}
                data={data}
                svg={{stroke: '#005b87'}}
                contentInset={contentInset}>
                <Grid />
              </LineChart>
            </View>
            <XAxis
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                marginRight: -10,
              }}
              data={dataDia}
              contentInset={contentInsetdia}
              svg={{
                fill: '#f0edf6',
                fontSize: 10,
              }}
              numberOfTicks={5}
              formatLabel={value => {
                if (value === 0) {
                  return `${dia}/07`;
                } else if (value < 5) {
                  return `${value + dia}/07`;
                }
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              flex: 1,
              margin: 10,
              marginTop: 30,
            }}>
            <View>
              <Text style={style.topText}>Corrente elétrica:</Text>
              <Text style={style.consumo}>
                {this.props.corrente.CorrenteAtual}A
              </Text>
            </View>
            <View>
              <Text style={style.topText}>Potência elétrica:</Text>
              <Text style={style.consumo}>
                {this.props.potencia.PotenciaAtual} W
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              flex: 1,
              marginTop: -5,
            }}>
            <View>
              <Text style={style.topText}>Consumo Quilowatt-hora mensal:</Text>
              <Text style={style.consumo}>{this.props.consumoKwh.Consumo}</Text>
            </View>
          </View>
          <View style={style.bottom}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View>
                <Text style={style.topText}>Estado do Plug:</Text>
                {() => {
                  if (this.props.switchValue) {
                    return (
                      <Text
                        style={{
                          justifyContent: 'center',
                          fontSize: 23,
                          fontFamily: 'Quicksand-SemiBold',
                          color: 'green',
                        }}>
                        Desligado
                      </Text>
                    );
                  }
                }}
              </View>
              <View style={style.container}>
                <Switch
                  trackColor={{false: 'red', true: 'green'}}
                  style={{color: 'black', marginTop: 5, marginRight: 10}}
                  onValueChange={this.toggleSwitch}
                  value={this.props.switchValue}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  consumoKwh: state.AppReducer.consumoKwh,
  switchValue: state.AppReducer.switchValue,
  potencia: state.AppReducer.potencia,
  corrente: state.AppReducer.corrente,
  consumoDinheiro: state.AppReducer.consumoDinheiro,
});

export default connect(
  mapStateToProps,
  {valorLeitura, valor_Switch, change_switch, valor_Corrente, valor_Potencia},
)(PlugInteligente);

const style = StyleSheet.create({
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  topText: {
    justifyContent: 'center',
    fontSize: 23,
    fontFamily: 'Quicksand-Regular',
    color: '#f0edf6',
  },
  consumo: {
    justifyContent: 'center',
    fontSize: 23,
    fontFamily: 'Quicksand-SemiBold',
    color: '#f0edf6',
  },
  flex: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#001d2e',
  },
  mid: {
    flex: 3,
    alignItems: 'center',
    marginLeft: 5,
  },
  dispositivo: {
    fontSize: 20,
    padding: 10,
    color: '#f0edf6',
    fontFamily: 'Sparta',
  },
  bottom: {
    flex: 1,
  },
  header: {
    backgroundColor: '#001d2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 23,
    color: '#f0edf6',
    padding: 17,
    fontFamily: 'Spartan',
  },
  card: {
    backgroundColor: '#001d2e',
    flex: 1,
    borderTopColor: '#f0edf6',
    borderTopWidth: 0.2,
    marginHorizontal: 10,
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
  container: {},
});
