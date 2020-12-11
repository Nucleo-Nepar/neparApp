import React, {useRef} from 'react';
import {Image, StyleSheet, View, Button} from 'react-native';
import {Drawer, Container} from 'native-base';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
  faBars,
  faLightbulb,
  faPlug,
  faFire,
} from '@fortawesome/free-solid-svg-icons';

import StyledButton from './ButtonSideBar';

const SideBar = ({navigator}) => {
  return (
    <View style={styles.container}>
      <StyledContainer>
        <StyledText>
          NEPAR - Núcleo de Estudos de Automação Residencial
        </StyledText>
      </StyledContainer>
      <StyledButton icon={faLightbulb} text="LIE - Controle" />
      <StyledButton
        icon={faPlug}
        text="Plug Inteligente"
        onPress={() => navigator.navigate('Plug')}
      />
      <StyledButton icon={faFire} text="Sensor de Gás" />
      <Button title="tete" onPress={() => navigator.navigate('Plug')} />
    </View>
  );
};

const App = ({navigator, children}) => {
  const drawer = useRef(0);

  const closeDrawer = () => {
    drawer.current._root.close();
  };
  const openDrawer = () => {
    drawer.current._root.open();
  };

  return (
    <Drawer
      ref={ref => {
        drawer.current = ref;
      }}
      content={<SideBar navigator={navigator} />}
      onClose={() => closeDrawer()}>
      <Container>
        <StyledHeader>
          <StyledIcon>
            <FontAwesomeIcon
              onPress={() => openDrawer()}
              icon={faBars}
              size={31}
              color="#fff"
            />
          </StyledIcon>
          <StyledImage>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require('../assets/imgs/logo1.png')}
              />
            </View>
          </StyledImage>
        </StyledHeader>
        {children}
      </Container>
    </Drawer>
  );
};

const StyledHeader = styled.View`
  background-color: #001d2e;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled.Text`
  color: #f0edf6;
  font-family: 'Quicksand-Semibold';
`;

const StyledIcon = styled.View`
  position: absolute;
  padding: 15px;
`;

const StyledImage = styled.View`
  align-items: center;
  flex: 1;
`;

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001d2e',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tinyLogo: {
    marginTop: 5,
    width: 100,
    height: 50,
  },
});

export default App;
