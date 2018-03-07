import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TWITTER from '../../assets/images/twitter.png'

const Avatar = ({image, twitter, style}) =>
  <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
    <Background style={{
      backgroundImage: `url(${image})`,
      ...style,
    }} />
  </a>

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  style: PropTypes.object,
}

const Background = styled.div`
  background-size: cover;
  border-color: #2f2f2f;
  border-style: solid;
  border-width: 3px;
  border-radius: 50%;
  box-shadow: 0 0 0 #000;
  width: 50px; height: 50px;
  transition: border-color 0.6s, background-image 0.6s;

  &:hover {
    background-image: url(${TWITTER}) !important;
    border-color: transparent;
  }
`

export default Avatar
