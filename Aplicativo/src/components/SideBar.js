import React, {useEffect} from 'react';
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

const SideBar = props => {
  return (
    <>
      <StyledView>
        <StyledContainer>
          <StyledText>
            NEPAR - Núcleo de Estudos de Automação Residencial
          </StyledText>
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
          onPress={() => props.signOut()}
        />
      </StyledSignOut>
    </>
  );
};

const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 150px;
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
});

export default connect(
  mapStateToProps,
  {
    signOut,
  },
)(SideBar);
