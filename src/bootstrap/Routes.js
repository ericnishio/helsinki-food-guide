import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Reboot from 'material-ui/Reboot'

import Home from '../pages/Home'

const Routes = () =>
  <Router>
    <Fragment>
      <Reboot />
      <Route exact path="/" component={Home} />
    </Fragment>
  </Router>

export default Routes
