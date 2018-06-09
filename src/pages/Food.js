import React, {Component} from 'react'

import {FadeIn} from '../common/styles/animations'
import {Row, Content} from '../common/components/Grid'
import Hero from '../common/components/Hero'
import {Heading} from '../common/components/Typography'
import Dish from '../common/components/Dish'
import Spinner from '../common/components/Spinner'
import {loadDishes} from '../common/api'

class Food extends Component {
  state = {
    dishes: undefined,
  }

  componentDidMount() {
    window.scrollTo(0, 0)

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
      return <Spinner centerOfViewport={true} />
    }

    return (
      <Row>
        <Content>
          <FadeIn>
            <Hero>
              <Heading>
                Know exactly what to order.<br />
                Featuring only the best dishes in Helsinki.
              </Heading>
            </Hero>
            {
              dishes.map(dish =>
                <Dish
                  key={dish.id}
                  dish={dish}
                  restaurant={dish.restaurant}
                />
              )
            }
          </FadeIn>
        </Content>
      </Row>
    )
  }
}

export default Food
