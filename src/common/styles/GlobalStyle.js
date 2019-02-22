import {createGlobalStyle} from 'styled-components'

import {BACKGROUND_COLOR, TEXT_COLOR, LINK_COLOR} from './colors'
import {PRIMARY_FONT, MEDIUM_FONT_SIZE} from './fonts'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${BACKGROUND_COLOR};
    font-family: ${PRIMARY_FONT};
    font-size: ${MEDIUM_FONT_SIZE};
    color: ${TEXT_COLOR};
    margin: 0;
  }

  a {
    color: ${LINK_COLOR};
    text-decoration: none;
    transition: color 0.15s;

    &:hover {
      color: #d20074;
    }
  }

  p {
    margin-top: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default GlobalStyle
