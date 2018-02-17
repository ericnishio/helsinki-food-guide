import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {White, Pink} from '../styles/colors'

const Card = ({stripeColor = Pink.MEDIUM, children, style}) =>
  <Container style={style}>
    <Stripe color={stripeColor} />
    <Body>
      {children}
    </Body>
  </Container>

Card.propTypes = {
  stripeColor: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
}

export const Heading = styled.h3`
  font-size: 30px;
  font-weight: 400;
  margin: 0;
`

const Container = styled.div`
  background-color: ${White.LIGHT};
  display: flex;
  flex-direction: row;
`

const Stripe = styled.div`
  background-color: ${props => props.color};
  width: 10px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 40px;
`

export default Card
