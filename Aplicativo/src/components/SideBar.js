import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {
  faLightbulb,
  faPlug,
  faFire,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import {signOut} from '../actions/AutenticationActions';

import StyledButton from './ButtonSideBar';
import User from './User';

const SideBar = props => {
  const redireciona = () => props.navigation.navigate('login');

  return (
    <>
      <StyledView>
        <StyledContainer>
          <User />
        </StyledContainer>
        <StyledButton
          icon={faLightbulb}
          text="LIE - Controle"
          onPress={() => props.navigation.navigate('controleLab')}
        />
        <StyledButton
          icon={faPlug}
          text="Plug Inteligente"
          onPress={() => props.navigation.navigate('plug')}
        />
        <StyledButton icon={faFire} text="Sensor de Gás" onPress={() => {}} />
      </StyledView>
      <StyledSignOut>
        <StyledButton
          icon={faSignOutAlt}
          text="Sair"
          onPress={() => props.signOut(() => redireciona())}
        />
      </StyledSignOut>
    </>
  );
};

const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-color: #f0edf6;
  border-bottom-width: 0.2px;
  margin-left: 10px;
  margin-right: 10px;
  color: #f0edf6;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: #f0edf6;
  font-family: 'Quicksand-Semibold';
`;

const StyledView = styled.View`
  flex: 1;
  background-color: #001d2e;
`;

const StyledSignOut = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #001d2e;
`;

const mapStateToProps = state => ({
  loggedIn: state.AutenticationReducer.loggedIn,
  userInfo: state.AutenticationReducer.userInfo,
});

export default connect(
  mapStateToProps,
  {
    signOut,
  },
)(SideBar);
