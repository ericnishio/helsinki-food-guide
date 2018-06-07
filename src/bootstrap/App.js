import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AppBar from '../common/components/AppBar'
import Footer from '../common/components/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import CookiePolicy from '../modules/cookiePolicy/components/CookiePolicy'
import {COOKIE_POLICIES} from '../modules/cookiePolicy/constants'

const Routes = () =>
  <Router>
    <Fragment>
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <CookiePolicy policies={COOKIE_POLICIES} />
    </Fragment>
  </Router>

export default Routes
