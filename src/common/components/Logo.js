import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import LOGO from '../../assets/images/logo.png'

const Logo = ({style, alt = 'Helsinki Food Guide'}) =>
  <Image
    src={LOGO}
    alt={alt}
    style={{
      width: '170px', height: 'auto',
      ...style,
    }}
  />

Logo.propTypes = {
  alt: PropTypes.string,
  style: PropTypes.object,
}

const Image = styled.img`
  display: block;
`

export default Logo
