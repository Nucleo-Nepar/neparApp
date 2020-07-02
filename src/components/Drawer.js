import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Drawer, List, WhiteSpace, Icon} from '@ant-design/react-native';

import {connect} from 'react-redux';
import {modificaDrawer} from './../actions/AppActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
class DrawerC extends Component {
  constructor() {
    super(...arguments);
    this.onOpenChange = isOpen => {
      /* tslint:disable: no-console */
      console.log('Drawer', isOpen.toString());
    };
  }
  static navigationOptions = {
    header: {visible: false}, // !!! Hide Header
  };
  render() {
    console.log(this.props.drawer_open);

    const sidebar = (
      <ScrollView style={[styles.container]}>
        <List.Item
          key={1}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png">
          <Text>Categories - {1}</Text>
        </List.Item>
      </ScrollView>
    );
    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={el => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc">
        <View
          style={{
            marginTop: 15,
            marginLeft: 15,
            padding: 8,
          }}>
          <Icon
            type="menu"
            name="menu"
            size="lg"
            color="#001d2e"
            onPress={() => this.drawer && this.drawer.openDrawer()}
          />
          <WhiteSpace />
        </View>
      </Drawer>
    );
  }
}
const mapStateToProps = state => ({
  drawer_open: state.AppReducer.drawer_open,
});

export default connect(
  mapStateToProps,
  {modificaDrawer},
)(DrawerC);
