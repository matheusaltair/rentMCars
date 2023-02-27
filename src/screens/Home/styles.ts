import styled from 'styled-components'
import { FlatList, Text, View } from 'react-native'

export const Container = styled(View)`
  flex: 1;
  background-color: #F4F5F6;
`
export const Header = styled(View)`
  width: 100%;
  height: 113px;

  padding: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #1B1B1F;
`
export const Logo = styled(Text)`
  font-size: 20px;
`
export const Amount = styled(Text)`
  font-size: 14px;
`
export const CarList = styled(FlatList)`
  flex: 1
`
