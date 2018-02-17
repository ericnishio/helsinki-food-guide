import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({name, size = 24, style}) =>
  <i className="material-icons" style={{...style, fontSize: size}}>
    {name}
  </i>

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([18, 24, 36, 48]),
  style: PropTypes.object,
}

export default Icon
