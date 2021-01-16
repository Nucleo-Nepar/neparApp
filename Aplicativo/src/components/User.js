import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import COLORS from '../assets/colors'

const User = (props) => {
  // console.log(props.
  return (
    <StyledButton>
      {/* <StyledImage source={props.userInfo.photoURL || ''} />
      <StyledText>{props.userInfo.displayName}</StyledText> */}
    </StyledButton>
  )
}

const StyledButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 38px;
  font-weight: 500;
  padding: 27px;
`

const StyledImage = styled.Image`
  width: 50px;
  width: 50px;
`

const StyledText = styled.Text`
  color: ${COLORS.textColor};
  font-family: 'Quicksand-Semibold';
  font-size: 17px;
  margin-left: 15px;
`

const mapStateToProps = (state) => ({
  loggedIn: state.AutenticationReducer.loggedIn,
})

export default connect(mapStateToProps, {})(User)
