import React, {Component} from 'react';
import {View, Text} from 'react-native';
import _ from 'lodash';
import styled from 'styled-components';
import {connect} from 'react-redux';

class ControleLaboratorio extends Component {
  render() {
    return (
      <View>
        <StyledContainer>
          <Text>dasfas</Text>
        </StyledContainer>
      </View>
    );
  }
}

const StyledContainer = styled.View``;

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ControleLaboratorio);
