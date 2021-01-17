import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import COLORS from '../assets/colors'

const User = ({ userInfo }) => {
  const { name, photo } = userInfo
  return (
    <StyledButton>
      <StyledImage source={{ uri: photo }} />
      <StyledText>{name}</StyledText>
    </StyledButton>
  )
}

const StyledButton = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  padding: 20px;
`

const StyledImage = styled.Image`
  width: 100;
  height: 100;
  border-radius: 50px;
  border: 1.5px solid gray;
`

const StyledText = styled.Text`
  margin-top: 7px;
  color: ${COLORS.textColor};
  font-family: 'Quicksand-Semibold';
  font-size: 17px;
`

const mapStateToProps = state => ({
  loggedIn: state.AutenticationReducer.loggedIn,
  userInfo: state.AutenticationReducer.userInfo
})

export default connect(
  mapStateToProps,
  {}
)(User)
