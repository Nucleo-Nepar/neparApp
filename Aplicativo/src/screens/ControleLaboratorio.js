import React from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ControleLaboratorio = () => {
  const navigation = useNavigation();
  return (
    <View>
      <StyledContainer>
        <Text>dasfas</Text>
      </StyledContainer>
      <Button title="teste" onPress={() => navigation.navigate('plug')} />
    </View>
  );
};

const StyledContainer = styled.View``;

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ControleLaboratorio);
