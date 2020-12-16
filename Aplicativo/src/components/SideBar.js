import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import {faLightbulb, faPlug, faFire} from '@fortawesome/free-solid-svg-icons';
// import {useNavigation} from '@react-navigation/native';

import StyledButton from './ButtonSideBar';

const SideBar = () => {
  // const navigation = useNavigation();
  return (
    <StyledView>
      <StyledContainer>
        <StyledText>
          NEPAR - Núcleo de Estudos de Automação Residencial
        </StyledText>
      </StyledContainer>
      <StyledButton icon={faLightbulb} text="LIE - Controle" />
      <StyledButton icon={faPlug} text="Plug Inteligente" onPress={() => {}} />
      <StyledButton icon={faFire} text="Sensor de Gás" />
      {/* <Button title="tete" onPress={() => {}} /> */}
    </StyledView>
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SideBar);
