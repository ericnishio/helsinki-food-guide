import React from 'react'
import ReactDOM from 'react-dom'
import {injectGlobal} from 'styled-components'

import App from './bootstrap/App'
import registerServiceWorker from './bootstrap/registerServiceWorker'
import {BACKGROUND_COLOR} from './common/styles/colors'
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
    margin: 0;
  }
`
