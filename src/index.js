import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/test-component';
import Home from './components/Home';
import Callback from './components/Callback';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/test" component={TestComponent} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));