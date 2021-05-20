import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RickAndMorty from '../../container/RickAndMorty';
import Details from '../../container/Details';
import './App.css'
import Header from '../Header';
import Home from '../Home';

export default function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/characters" exact component={RickAndMorty} />
        </Switch>
      </Router>
    </div>
  );
}