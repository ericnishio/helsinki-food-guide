import React, {Component} from 'react'

import {Row, Content} from '../common/components/Grid'
import Hero from '../common/components/Hero'
import {Heading} from '../common/components/Typography'
import Dish from '../common/components/Dish'
import food from '../data/food.json'

class Home extends Component {
  render() {
    return (
      <Row>
        <Content>
          <Hero>
            <Heading>
              Know exactly what to order.<br />
              Featuring only the best dishes in Helsinki.
            </Heading>
          </Hero>
          {
            food.restaurants.map(restaurant =>
              restaurant.dishes.map(dish =>
                <Dish
                  key={dish.name}
                  dish={dish}
                  restaurant={restaurant}
                />
              )
            )
          }
        </Content>
      </Row>
    )
  }
}

export default Home
