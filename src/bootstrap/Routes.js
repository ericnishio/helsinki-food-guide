import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import GlobalStyles from '../common/styles/GlobalStyle'
import AppBar from '../common/components/AppBar'
import Footer from '../common/components/Footer'
import Food from '../pages/Food'
import About from '../pages/About'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import NotFound from '../pages/NotFound'

const Routes = () =>
  <Router>
    <Fragment>
      <GlobalStyles />
      <AppBar />
      <Switch>
        <Route exact path="/" component={Food} />
        <Route exact path="/about" component={About} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  </Router>

export default Routes
