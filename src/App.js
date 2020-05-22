import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Library from './components/pages/Library';
import Account from './components/pages/Account';
import BookPage from './components/pages/BookPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/book" component={BookPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
