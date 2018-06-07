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
  transition: opacity 0.1s ease-in;

  &:active {
    opacity: 0.7;
  }
`

const SIZE = '26px'

const Box = styled.div`
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-color: ${Pink.MEDIUM};
  display: flex;
  width: ${SIZE};
  height: ${SIZE};

  ${props => props.disabled && `border-color: ${Pink.LIGHT};`}
`

const Check = styled.div`
  background-color: ${Pink.MEDIUM};
  width: 10px;
  height: 10px;

  ${props => props.disabled && `background-color: ${Pink.LIGHT};`}
`

const Label = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: ${SIZE};
  margin-left: 8px;
`

export default Checkbox
