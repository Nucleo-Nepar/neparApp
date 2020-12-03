import React, {useRef} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Drawer, Container} from 'native-base';
import styled from 'styled-components';

const SideBar = () => {
  return (
    <View style={styles.container}>
      <StyledContainer>
        <StyledText>
          NEPAR - Núcleo de Estudos de Automação Residencial
        </StyledText>
      </StyledContainer>
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
            <Icon
              onPress={() => openDrawer()}
              name="bars"
              size={33}
              color="#fff"
              style={{}}
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

const StyledButton = styled.View`
  border-bottom: 1px solid #fff;
`;

const StyledText = styled.Text`
  color: #f0edf6;
`;

const StyledIcon = styled.View`
  position: absolute;
  margin-left: 15px;
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
