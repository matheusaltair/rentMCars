import React from 'react'
import { CarCard } from '../../components/CarCard'
import { Amount, CarList, Container, Header, Logo } from './styles'

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo>RentMCars</Logo>
        <Amount>Total 12 carros</Amount>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={() => {
          return <CarCard name='Audi' model='R8' period='ao dia' price='R$120' />
        }
        }
      />


    </Container>
  )
}