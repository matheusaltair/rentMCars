import React from 'react'
import { View } from 'react-native'
import { CarImage, Container, Content, Period, Icon, Model, Price, PriceIconRow, Title } from './styles'

interface CarProps {
  name: string,
  model: string,
  period: string,
  price: string,
}

export function CarCard({ name, model, period, price }: CarProps) {
  return (
    <Container>
      <Content>
        <View>
          <Title>{name}</Title>
          <Model>{model}</Model>
          <Period>{period}</Period>
          <PriceIconRow>
            <Price>{price}</Price>
            <Icon>%</Icon>
          </PriceIconRow>
        </View>
        <CarImage source={require('../../assets/imgs/r8.png')} />
      </Content>
    </Container>
  )
}