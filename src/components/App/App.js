import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import AppHeader from '../app-header'
import HomePage from '../pages/HomePage'
import InputPage from '../pages/InputPage'
import ListDetailsContainer from '../list-details'

import './App.css'

const App = () => {
  return (
    <Fragment>
      <AppHeader />
      <main role="main" className="container">
        <Switch>
          <Route path="/" exact component={ HomePage } />
          <Route path="/new" component={ InputPage } />
          <Route path='/project/:id' component={ ListDetailsContainer } />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App