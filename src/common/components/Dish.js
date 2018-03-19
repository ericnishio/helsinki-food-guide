import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {formatPrice} from '../helpers'
import {MOBILE_MAX_WIDTH} from '../styles/responsive'
import {MEDIUM_FONT_SIZE, LARGE_FONT_SIZE} from '../styles/fonts'
import Card, {Heading as Name} from './Card'
import Venue from './Venue'
import Icon from './Icon'

const Dish = ({dish, restaurant}) =>
  <Container>
    <Card style={{zIndex: 10, flex: 1}}>
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
`

const PHOTO_WIDTH = '380px'
const PHOTO_HEIGHT = '200px'

const PhotoBackground = styled.div`
  background-size: cover;
  width: ${PHOTO_WIDTH};
  height: ${PHOTO_HEIGHT};

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
  }
`

const PhotoPlaceholder = styled.div`
  align-items: center; justify-content: center;
  background-color: #423e4c;
  display: flex;
  width: ${PHOTO_WIDTH};
  height: ${PHOTO_HEIGHT};

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
  }
`

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    flex-direction: column-reverse;
  }
`

const Header = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    align-items: baseline;
    flex-direction: column;
  }
`

const Price = styled.div`
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 5px;
  margin-left: 10px;
  white-space: nowrap;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 18px;
    margin: 0;
    margin-top: 5px;
  }
`

const Description = styled.p`
  font-style: italic;
  font-size: ${LARGE_FONT_SIZE};
  font-weight: 300;
  line-height: 26px;
  margin-top: 1em; margin-bottom: 1em;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: ${MEDIUM_FONT_SIZE};
    line-height: 24px;
  }
`

const VenueContainer = styled.div`
  margin-top: 20px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 0;
  }
`

export default Dish
