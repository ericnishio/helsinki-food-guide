import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {White, Pink} from '../styles/colors'
import {MOBILE_MAX_WIDTH} from '../styles/responsive'

const Card = ({stripeColor, children, style}) =>
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
  font-size: 32px;
  font-weight: 400;
  line-height: 42px;
  margin: 0;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 24px;
    line-height: 34px;
  }
`

const Container = styled.div`
  background-color: ${White.LIGHT};
  display: flex;
  flex-direction: row;
`

export const Stripe = styled.div`
  background-color: ${props => props.color || Pink.MEDIUM};
  max-width: 8px;
  min-width: 8px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    max-width: 6px;
    min-width: 6px;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden; /* Wrap content on IE */
  padding: 40px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 20px;
  }
`

export default Card
