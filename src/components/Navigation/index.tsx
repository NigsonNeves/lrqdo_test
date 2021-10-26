import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import ProductDetails from '../../pages/Product'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product">
          <ProductDetails />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
