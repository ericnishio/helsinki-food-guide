import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import AppBar from '../common/components/AppBar'
import Footer from '../common/components/Footer'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const Routes = () =>
  <Fragment>
    <Router>
      <Fragment>
        <AppBar />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
        <Footer />
      </Fragment>
    </Router>
  </Fragment>


export default Routes
