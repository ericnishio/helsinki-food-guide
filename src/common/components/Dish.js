import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {formatPrice} from '../helpers'
import {TABLET_MAX_WIDTH} from '../styles/responsive'
import {LARGE_FONT_SIZE} from '../styles/fonts'
import Card, {Heading as Name} from './Card'
import Venue from './Venue'
import Icon from './Icon'

const Dish = ({dish, restaurant}) =>
  <Container>
    <Card style={{zIndex: 10}}>
      <Header>
        <Name>{dish.name}</Name>
        <Price>from {formatPrice(dish.price, 'EUR')}</Price>
      </Header>
      <Description>{dish.description}</Description>
      <VenueContainer>
        <Venue
          name={restaurant.name}
          address={restaurant.address}
          website={restaurant.website}
        />
      </VenueContainer>
    </Card>
    <Photo url={dish.photos[0]} />
  </Container>

Dish.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    website: PropTypes.string,
  }).isRequired,
}

const Photo = ({url}) =>
  <PhotoContainer>
    {
      url
        ? <PhotoBackground style={{backgroundImage: `url(${url})`}} />
        : <PhotoPlaceholder>
          <Icon name="restaurant" size={80} color="#3c3848" />
        </PhotoPlaceholder>
    }
  </PhotoContainer>

Photo.propTypes = {
  url: PropTypes.string,
}

const PhotoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    display: none;
  }
`

const PHOTO_WIDTH = '380px'
const PHOTO_HEIGHT = '200px'

const PhotoBackground = styled.div`
  background-size: cover;
  width: ${PHOTO_WIDTH};
  height: ${PHOTO_HEIGHT};
`

const PhotoPlaceholder = styled.div`
  align-items: center; justify-content: center;
  background-color: #423e4c;
  display: flex;
  width: ${PHOTO_WIDTH};
  height: ${PHOTO_HEIGHT};
`

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const Header = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    align-items: baseline;
    flex-direction: column;
  }
`

const Price = styled.div`
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 3px;
  margin-left: 10px;
  white-space: nowrap;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    margin: 0;
    margin-top: 3px;
  }
`

const Description = styled.p`
  font-style: italic;
  font-size: ${LARGE_FONT_SIZE};
  font-weight: 300;
  line-height: 26px;

  &:last-child {
    margin-bottom: 0;
  }
`

const VenueContainer = styled.div`
  margin-top: 20px;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    margin-top: 0;
  }
`

export default Dish
