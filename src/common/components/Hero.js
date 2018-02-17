import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {TABLET_MIN_WIDTH} from '../styles/responsive'

const Hero = ({children, style}) =>
  <Container style={style}>
    {children}
  </Container>

Hero.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
}

const Container = styled.div`
  margin-top: 140px;
  margin-bottom: 60px;

  @media (max-width: ${TABLET_MIN_WIDTH}) {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export default Hero
