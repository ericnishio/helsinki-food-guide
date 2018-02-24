import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AppBar from '../common/components/AppBar'
import Footer from '../common/components/Footer'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const Routes = () =>
  <Router>
    <Fragment>
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  </Router>


export default Routes
