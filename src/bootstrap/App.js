import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import AppBar from '../common/components/AppBar'
import Home from '../pages/Home'

const Routes = () =>
  <Fragment>
    <Router>
      <Fragment>
        <AppBar />
        <Route exact path="/" component={Home} />
      </Fragment>
    </Router>
  </Fragment>


export default Routes
