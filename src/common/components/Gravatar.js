import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Gravatar = ({md5, style}) =>
  <Background style={{
    backgroundImage: `url(//www.gravatar.com/avatar/${md5})`,
    ...style,
  }} />

Gravatar.propTypes = {
  md5: PropTypes.string.isRequired,
  style: PropTypes.object,
}

const Background = styled.div`
  background-size: cover;
  border: 3px solid #2f2f2f;
  border-radius: 50%;
  width: 50px; height: 50px;
`

export default Gravatar
