import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {formatPrice} from '../helpers'
import {TABLET_MAX_WIDTH} from '../styles/responsive'
import Card, {Heading} from './Card'
import Venue from './Venue'
import Icon from './Icon'

const Dish = ({dish, restaurant}) =>
  <Container>
    <Card style={{zIndex: 10}}>
      <HeadingRow>
        <Heading>{dish.name}</Heading>
        <Price>
          from {formatPrice(dish.price, 'EUR')}
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
    <Photo url={dish.photos[0]} alt={dish.name} />
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

const Photo = ({url, alt}) =>
  <PhotoContainer>
    {
      url
        ? <PhotoBackground style={{backgroundImage: `url(${url})`}} title={alt} />
        : <PhotoPlaceholder>
          <Icon name="restaurant" size={80} color="#3c3848" />
        </PhotoPlaceholder>
    }
  </PhotoContainer>

Photo.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

const PhotoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    display: none;
  }
`

const PHOTO_WIDTH = '380px'
const PHOTO_HEIGHT = '190px'

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

const HeadingRow = styled.div`
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
  margin-bottom: 2px;
  margin-left: 10px;
  white-space: nowrap;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    margin: 0;
    margin-top: 3px;
  }
`

const Description = styled.p`
  font-style: italic;
  font-weight: 300;

  &:last-child {
    margin-bottom: 0;
  }
`

export default Dish
