import React from 'react'
import { LineChart, YAxis, Grid, XAxis } from 'react-native-svg-charts'
import styled from 'styled-components'

import COLORS from '../assets/colors'

const CharComponent = props => {
  const data = [0, 10, 40, 25, 17]
  const dataDia = [1, 2, 3, 4, 5, 6]
  const dia = 10
  const contentInset = { top: 20, bottom: 20 }
  const contentInsetdia = { top: 20, left: 50, bottom: 20 }

  return (
    <>
      <StyledText>Gráfico Diário:</StyledText>
      <StyledView>
        <YAxis
          style={{ width: 30 }}
          data={data}
          contentInset={contentInset}
          svg={{
            fill: '#f0edf6',
            fontSize: 10
          }}
          numberOfTicks={10}
          formatLabel={value => `R$${value}`}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 20, marginRight: 15 }}
          data={data}
          svg={{ stroke: '#005b87' }}
          contentInset={contentInset}
        >
          <Grid />
        </LineChart>
      </StyledView>
      <XAxis
        style={{
          flexDirection: 'row',
          marginLeft: 10,
          marginRight: -10
        }}
        data={dataDia}
        contentInset={contentInsetdia}
        svg={{
          fill: '#f0edf6',
          fontSize: 10
        }}
        numberOfTicks={5}
        formatLabel={value => {
          if (value === 0) {
            return `${dia}/07`
          } else if (value < 5) {
            return `${value + dia}/07`
          }
        }}
      />
    </>
  )
}
const StyledText = styled.Text`
  color: ${COLORS.textColor};
  text-align: center;
  font-size: 21px;
  font-family: 'Quicksand-Regular';
`

const StyledView = styled.View`
  height: 200px;
  flex-direction: row;
`

export default CharComponent
