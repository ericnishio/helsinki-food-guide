import React from 'react'
import PropTypes from 'prop-types'

import LOGO from '../../assets/images/logo.png'

const Logo = ({style, alt = 'Helsinki Food Guide'}) =>
  <img
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

export default Logo
