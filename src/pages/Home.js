import React, {Component} from 'react'

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
          <Hero>
            <Heading>
              Know exactly what to order.<br />
              Featuring only the best dishes in Helsinki.
            </Heading>
          </Hero>
          {
            dishes.map(dish =>
              <Dish
                key={dish.name}
                dish={dish}
                restaurant={dish.restaurant}
              />
            )
          }
        </Content>
      </Row>
    )
  }
}

export default Home
