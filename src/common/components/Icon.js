import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({name, size = 24, color = 'inherit', style}) =>
  <i className="material-icons" style={{...style, color, fontSize: size}}>
    {name}
  </i>

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
}

export default Icon
