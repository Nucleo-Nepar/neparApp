import React, { useEffect } from 'react'
import SwitchSelector from 'react-native-switch-selector'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { isLogged, getCurrentUser } from '../actions/AutenticationActions'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

import COLORS from '../assets/colors'
import { Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const ControleLaboratorio = props => {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getCurrentUser(true)
    })
    return unsubscribe
  }, [props, props.navigation])

  const options = [
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

  return (
    <StyledContainer>
      <StyledContainer>
        <StyledSwitchCO>
          <StyledSwitch>
            <StyledText>Luz 1:</StyledText>
            <SwitchSelector
              backgroundColor="lightgray"
              options={options}
              initial={1}
              onPress={() => {}}
            />
          </StyledSwitch>
          <StyledSwitch>
            <StyledText>Luz 2:</StyledText>
            <SwitchSelector
              backgroundColor="lightgray"
              options={options}
              initial={1}
              onPress={() => {}}
            />
          </StyledSwitch>
        </StyledSwitchCO>
        <StyledSwitchCO>
          <StyledSwitch>
            <StyledText>Luz 3:</StyledText>
            <SwitchSelector
              backgroundColor="lightgray"
              options={options}
              initial={1}
              onPress={() => {}}
            />
          </StyledSwitch>
          <StyledSwitch>
            <StyledText>Luz 4:</StyledText>
            <SwitchSelector
              backgroundColor="lightgray"
              options={options}
              initial={1}
              onPress={() => {}}
            />
          </StyledSwitch>
        </StyledSwitchCO>
        <StyledSwitchCO>
          <StyledText>Todas as luzes:</StyledText>
          <StyledSwitch>
            <SwitchSelector
              backgroundColor="lightgray"
              options={options}
              initial={1}
              onPress={() => {}}
            />
          </StyledSwitch>
        </StyledSwitchCO>
      </StyledContainer>
      <StyledContainer />
      <StyledContainer />
    </StyledContainer>
  )
}

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
  userInfo: state.AutenticationReducer.userInfo
})

export default connect(
  mapStateToProps,
  {
    isLogged,
    getCurrentUser
  }
)(ControleLaboratorio)
