import React from 'react'
import ReactDOM from 'react-dom'
import {injectGlobal} from 'styled-components'

import App from './bootstrap/App'
import registerServiceWorker from './bootstrap/registerServiceWorker'
import {BACKGROUND_COLOR, TEXT_COLOR, LINK_COLOR} from './common/styles/colors'
import {PRIMARY_FONT} from './common/styles/fonts'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${BACKGROUND_COLOR};
    font-family: ${PRIMARY_FONT};
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
`
