import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import COLORS from '../assets/colors';

const Button = ({onPress, text, icon}) => (
  <StyledButton onPress={onPress}>
    <FontAwesomeIcon icon={icon} size={25} color={COLORS.textColor} />
    <StyledText>{text}</StyledText>
  </StyledButton>
);

const StyledButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 38px;
  font-weight: 500;
  padding: 27px;
`;

const StyledText = styled.Text`
  color: ${COLORS.textColor};
  font-family: 'Quicksand-Semibold';
  font-size: 17px;
  margin-left: 15px;
`;

Button.defaulProps = {
  onPress: () => {},
};

export default Button;
