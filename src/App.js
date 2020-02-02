import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './styles/app.scss';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
