import React, { useEffect } from 'react'
import SwitchSelector from 'react-native-switch-selector'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import COLORS from '../assets/colors'

import { isLogged, getCurrentUser } from '../actions/AutenticationActions'
import { lab_control, change_switch } from '../actions/AppActions'

const ControleLaboratorio = props => {
  const { L1, L2, L3, L4, Projetor } = props.laboratorio

  useEffect(() => {
    props.lab_control()
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getCurrentUser(false)
    })
    return unsubscribe
  }, [])

  const light = [
    {
      value: false,
      customIcon: <FontAwesomeIcon icon={faLightbulb} size={25} />,
      activeColor: 'gray'
    },
    {
      value: true,
      customIcon: (
        <FontAwesomeIcon
          icon={faLightbulb}
          size={25}
          color={COLORS.textColor}
        />
      ),
      activeColor: 'green'
    }
  ]

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

  return (
    <StyledContainer>
      <StyledTitle>Controle do Laboratório</StyledTitle>
      <StyledContainer>
        <StyledSwitchCO>
          <StyledSwitch>
            <StyledText>Luz 1:</StyledText>
            <SwitchSelector
              backgroundColor="lightgray"
              options={light}
              initial={0}
              value={L1 ? 1 : 0}
              onPress={value => props.change_switch(value, '/LIE/L1')}
            />
          </StyledSwitch>
          <StyledSwitch>
            <StyledText>Luz 2:</StyledText>
            <SwitchSelector
              backgroundColor="lightgray"
              options={light}
              initial={0}
              value={L2 ? 1 : 0}
              onPress={value => props.change_switch(value, '/LIE/L2')}
            />
          </StyledSwitch>
        </StyledSwitchCO>
        <StyledSwitchCO>
          <StyledSwitch>
            <StyledText>Luz 3:</StyledText>
            <SwitchSelector
              backgroundColor="lightgray"
              options={light}
              initial={0}
              value={L3 ? 1 : 0}
              onPress={value => props.change_switch(value, '/LIE/L3')}
            />
          </StyledSwitch>
          <StyledSwitch>
            <StyledText>Luz 4:</StyledText>
            <SwitchSelector
              backgroundColor="lightgray"
              options={light}
              initial={0}
              value={L4 ? 1 : 0}
              onPress={value => props.change_switch(value, '/LIE/L4')}
            />
          </StyledSwitch>
        </StyledSwitchCO>
        <StyledSwitchCO>
          <StyledSwitch>
            <StyledText />
            <StyledText>Projetor:</StyledText>
          </StyledSwitch>

          <StyledSwitch>
            <StyledText />
            <SwitchSelector
              backgroundColor="lightgray"
              options={options}
              initial={0}
              value={Projetor ? 1 : 0}
              onPress={value => props.change_switch(value, '/LIE/Projetor')}
            />
          </StyledSwitch>
        </StyledSwitchCO>
      </StyledContainer>
      <StyledFooter>
        <StyledText>Cortina:</StyledText>
        <StyledButton onPress={() => props.change_switch(1, '/Cortina/Estado')}>
          <StyledText>Abrir</StyledText>
        </StyledButton>
        <StyledButton onPress={() => props.change_switch(3, '/Cortina/Estado')}>
          <StyledText>Metade</StyledText>
        </StyledButton>
        <StyledButton onPress={() => props.change_switch(0, '/Cortina/Estado')}>
          <StyledText>Fechar</StyledText>
        </StyledButton>
      </StyledFooter>
    </StyledContainer>
  )
}

const StyledTitle = styled.Text`
  font-size: 22px;
  color: #f0edf6;
  padding: 17px;
  font-family: 'Spartan';
  text-align: center;
`
const StyledButton = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #001d46;
  width: 100%;
  height: 40px;
  border-radius: 13px;
  margin: 10px 0px;
`
const StyledFooter = styled.View`
  padding: 10px 25px 40px 25px;
  display: flex;
  flex: 1;
  background-color: ${COLORS.background};
  justify-content: space-around;
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
  font-size: 20px;
  padding: 5px;
`

const StyledSwitch = styled.View`
  width: 150px;
`

const mapStateToProps = state => ({
  loggedIn: state.AutenticationReducer.loggedIn,
  userInfo: state.AutenticationReducer.userInfo,
  laboratorio: state.AppReducer.laboratorio
})

export default connect(
  mapStateToProps,
  {
    isLogged,
    getCurrentUser,
    lab_control,
    change_switch
  }
)(ControleLaboratorio)
