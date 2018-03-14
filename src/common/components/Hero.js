import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {MOBILE_MAX_WIDTH} from '../styles/responsive'

const Hero = ({children, style}) =>
  <Container style={style}>
    {children}
  </Container>

Hero.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
}

const Container = styled.div`
  margin-top: 140px; margin-bottom: 60px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 80px; margin-bottom: 40px;
    margin-right: 10px;
  }
`

export default Hero
