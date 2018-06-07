import styled from 'styled-components'

import {White, Pink} from '../styles/colors'

const Button = styled.button`
  align-items: center; justify-content: center;
  background-color: ${Pink.MEDIUM};
  border: none;
  color: ${White.LIGHT};
  cursor: pointer;
  display: flex;
  font-size: 13px;
  font-weight: 600;
  padding-left: 40px; padding-right: 40px;
  height: 40px;
  text-transform: uppercase;
  transition: opacity 0.1s ease-in;

  &:focus {
    outline: none;
  }

  &:active {
    opacity: 0.7;
  }
`

export default Button
