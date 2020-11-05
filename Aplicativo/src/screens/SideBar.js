import React, {useRef} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Drawer, Container, Header, Content, Button} from 'native-base';
import styled from 'styled-components';

const SideBar = () => {
  return (
    <View style={[styles.container, {backgroundColor: '#fff'}]}>
      <Text>
        <Icon name="rocket" size={30} color="#900" />
        Conteúdo side bar
      </Text>
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

const StyledIcon = styled.View`
  position: absolute;
  margin-left: 15px;
`;

const StyledImage = styled.View`
  align-items: center;
  flex: 1;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
