import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RickAndMorty from '../../container/RickAndMorty';
import Details from '../../container/Details';
import './App.css'

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={RickAndMorty} />
          <Route path="/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}