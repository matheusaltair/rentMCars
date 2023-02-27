import styled from 'styled-components'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export const Container = styled(TouchableOpacity)`
  padding: 10px 14px;
  margin: 12px;

  border-radius: 10px;

  background-color: #ffffff;
`
export const Content = styled(View)`
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`
export const Title = styled(Text)`
  font-size: 12px;
  text-transform: uppercase;

  color: #AEAEB3;
`
export const Model = styled(Text)`
  font-size: 16px;
  text-transform: uppercase;

  margin-bottom: 12px;

  color: #47474D;
`
export const Period = styled(Text)`
  font-size: 10px;
  text-transform: uppercase;
  
  color: #AEAEB3;
`
export const PriceIconRow = styled(View)`
  flex-direction: row;
  align-items: center;
`
export const Price = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #DC1637;
`
export const Icon = styled(Text)`
  font-size: 18px;

  margin-left: 14px;

  color: #DC1637;
`

export const CarImage = styled(Image)`
  width: 190px;
  height: 80px;
`

