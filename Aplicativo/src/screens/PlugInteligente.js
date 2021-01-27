import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SwitchSelector from 'react-native-switch-selector'
import CharComponent from '../components/CharComponent'

import COLORS from '../assets/colors'

import {
  valorLeitura,
  change_switch,
  valor_Switch,
  valor_Corrente,
  valor_Potencia
} from '../actions/AppActions'

const PlugInteligente = props => {
  const options = [
    {
      value: false,
      label: 'Off',
      activeColor: 'gray'
    },
    {
      value: true,
      label: 'On',
      activeColor: 'green'
    }
  ]

  useEffect(() => {
    props.valorLeitura()
    props.valor_Switch()
    props.valor_Corrente()
    props.valor_Potencia()
  }, [])

  const toggleSwitch = value => {
    props.change_switch(value, '/switch/')
  }

  return (
    <StyledContainer>
      <StyledTitle>Plug Inteligente</StyledTitle>
      <StyledSwitchCO>
        <StyledView>
          <StyledText>Consumo Diario:</StyledText>
          <StyledValue>R$ {props.consumoDinheiro.ConsumoReais}</StyledValue>
        </StyledView>
        <StyledView>
          <StyledText>Consumo Mensal:</StyledText>
          <StyledValue>R$ 115,23</StyledValue>
        </StyledView>
      </StyledSwitchCO>
      <StyledMidContainer>
        <CharComponent />
      </StyledMidContainer>
      <StyledSwitchCO>
        <StyledView>
          <StyledText>Corrente elétrica:</StyledText>
          <StyledValue>{props.corrente.CorrenteAtual}A</StyledValue>
        </StyledView>
        <StyledView>
          <StyledText>Potência elétrica:</StyledText>
          <StyledValue>{props.potencia.PotenciaAtual} W</StyledValue>
        </StyledView>
      </StyledSwitchCO>
      <StyledSwitchCO>
        <StyledView>
          <StyledText>Consumo Quilowatt-hora mensal:</StyledText>
          <StyledValue>{props.consumoKwh.Consumo}</StyledValue>
        </StyledView>
      </StyledSwitchCO>

      <StyledSwitchCO>
        <StyledText>Estado do Plug:</StyledText>
        <StyledSwitch>
          <SwitchSelector
            backgroundColor="lightgray"
            options={options}
            initial={0}
            value={props.switchValue ? 1 : 0}
            onPress={value => props.change_switch(value, '/switch/')}
          />
        </StyledSwitch>
      </StyledSwitchCO>
    </StyledContainer>
  )
}
const mapStateToProps = state => ({
  consumoKwh: state.AppReducer.consumoKwh,
  switchValue: state.AppReducer.switchValue,
  potencia: state.AppReducer.potencia,
  corrente: state.AppReducer.corrente,
  consumoDinheiro: state.AppReducer.consumoDinheiro,
  userInfo: state.AutenticationReducer.userInfo
})

const StyledTitle = styled.Text`
  font-size: 22px;
  color: #f0edf6;
  padding: 17px;
  font-family: 'Spartan';
  text-align: center;
`

const StyledContainer = styled.View`
  display: flex;
  flex: 1;
  background-color: ${COLORS.background};
  justify-content: space-around;
`
const StyledSwitchCO = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const StyledText = styled.Text`
  color: ${COLORS.textColor};
  text-align: center;
  font-size: 21px;
  font-family: 'Quicksand-Regular';
`

const StyledValue = styled.Text`
  color: ${COLORS.textColor};
  font-size: 21px;
  font-family: 'Quicksand-SemiBold';
`

const StyledSwitch = styled.View`
  width: 150px;
`

const StyledView = styled.View``

const StyledMidContainer = styled.View`
  flex: 3;
  align-items: center;
  margin-left: 5px;
`

export default connect(
  mapStateToProps,
  {
    valorLeitura,
    valor_Switch,
    change_switch,
    valor_Corrente,
    valor_Potencia
  }
)(PlugInteligente)
