import React from 'react'
import Profile from './pages/profile'
import Product from './pages/product'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Profile} />
        <Route path='/product' component={Product} />
      </Switch>
    </Router>
  )
}

export default App