import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'

import {Pink} from '../styles/colors'

const Spinner = ({style}) =>
  <Container style={style}>
    <Outer>
      <Inner />
      <Inner />
      <Inner />
      <Inner />
    </Outer>
  </Container>

Spinner.propTypes = {
  style: PropTypes.object,
}

const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-grow: 1;
`

const Outer = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Inner = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  border: 6px solid ${Pink.MEDIUM};
  border-radius: 50%;
  animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${Pink.MEDIUM} transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`

export default Spinner
