import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { isLogged, getCurrentUser } from '../actions/AutenticationActions'

const ControleLaboratorio = props => {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getCurrentUser(props.loggedIn)
    })
    return unsubscribe
  }, [props.navigation])

  return (
    <View>
      <StyledContainer>
        <Text>dasfas</Text>
      </StyledContainer>
      <Button title="teste" onPress={() => props.navigation.navigate('plug')} />
    </View>
  )
}

const StyledContainer = styled.View``

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
