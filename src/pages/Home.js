import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'

import {Row, Content} from '../common/components/Grid'
import Hero from '../common/components/Hero'
import {Heading} from '../common/components/Typography'
import Dish from '../common/components/Dish'
import Spinner from '../common/components/Spinner'
import {loadDishes} from '../common/api'

class Home extends Component {
  state = {
    dishes: undefined,
  }

  componentDidMount() {
    this.loadDishes()
  }

  loadDishes = async () => {
    try {
      const dishes = await loadDishes()

      this.setState({dishes})
    } catch (e) {
      window.alert('Server error')
    }
  }

  render() {
    const {dishes} = this.state

    if (!dishes) {
      return (
        <Spinner centerOfScreen={true} />
      )
    }

    return (
      <Row>
        <Content>
          <HeroContainer>
            <Hero>
              <Heading>
                Know exactly what to order.<br />
                Featuring only the best dishes in Helsinki.
              </Heading>
            </Hero>
          </HeroContainer>
          <DishContainer>
            {
              dishes.map(dish =>
                <Dish
                  key={dish.name}
                  dish={dish}
                  restaurant={dish.restaurant}
                />
              )
            }
          </DishContainer>
        </Content>
      </Row>
    )
  }
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const HeroContainer = styled.div`
  animation: ${fadeIn} 0.8s;
`

const DishContainer = styled.div`
  animation: ${fadeIn} 0.8s;
`

export default Home
