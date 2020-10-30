import React, {useRef} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Drawer, Container, Header, Content, Button} from 'native-base';

import HomeScreen from './Home';

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
        <Header
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#001d2e',
          }}>
          <Icon
            onPress={() => openDrawer()}
            name="bars"
            size={30}
            color="#fff"
          />
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/imgs/logo1.png')}
            />
          </View>
        </Header>
        {children}
      </Container>
    </Drawer>
  );
};

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
    alignItems: 'center',
  },
});

export default App;
