import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {formatPrice} from '../helpers'
import Card, {Heading} from './Card'
import Venue from './Venue'

const Dish = ({dish, restaurant}) =>
  <Container>
    <Card>
      <HeadingRow>
        <Heading>{dish.name}</Heading>
        <Price>
          from {formatPrice(dish.price.value, dish.price.currency)}
        </Price>
      </HeadingRow>
      <Description>{dish.description}</Description>
      <Venue
        name={restaurant.name}
        address={restaurant.address}
        website={restaurant.website}
        style={{
          marginTop: '20px',
        }}
      />
    </Card>
  </Container>

Dish.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    website: PropTypes.string,
  }).isRequired,
}

const Container = styled.div`
  margin-bottom: 30px;
`

const HeadingRow = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
`

const Price = styled.div`
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 2px;
  margin-left: 10px;
  white-space: nowrap;
`

const Description = styled.p`
  font-style: italic;
  font-weight: 300;

  &:last-child {
    margin-bottom: 0;
  }
`

export default Dish
