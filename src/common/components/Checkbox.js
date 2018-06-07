import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Pink} from '../styles/colors'

const Checkbox = ({value, onClick, label, disabled = false, style}) => (
  <Container
    onClick={() => (disabled ? undefined : onClick(!value))}
    disabled={disabled}
    style={style}
  >
    <Box disabled={disabled}>
      {value && <Check disabled={disabled} />}
    </Box>
    <Label disabled={disabled}>{label}</Label>
  </Container>
)

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.any,
}

const Container = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
`

const Box = styled.div`
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-color: ${Pink.MEDIUM};
  display: flex;
  width: 20px;
  height: 20px;

  ${props => props.disabled && 'border-color: #ddd;'}
`

const Check = styled.div`
  background-color: ${Pink.MEDIUM};
  width: 10px;
  height: 10px;

  ${props => props.disabled && 'background-color: #ddd;'}
`

const Label = styled.div`
  margin-left: 5px;
`

export default Checkbox
