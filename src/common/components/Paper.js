import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {White} from '../styles/colors'
import {LARGE_FONT_SIZE} from '../styles/fonts'
import {TABLET_MAX_WIDTH} from '../styles/responsive'
import {Stripe} from './Card'

const Paper = ({children, style}) =>
  <Container style={style}>
    <Stripe />
    <Inner>
      {children}
    </Inner>
  </Container>

Paper.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
}

const Container = styled.div`
  background-color: ${White.LIGHT};
  color: #484848;
  display: flex;
  font-size: ${LARGE_FONT_SIZE};
  font-style: normal;
  line-height: 34px;
  width: 80%;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    width: 100%;
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  padding-left: 90px; padding-right: 90px;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    padding: 20px;
  }
`

export default Paper
