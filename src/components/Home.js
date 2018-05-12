import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { authFunction } from '../utils/api-access';

class Home extends Component {

  render() {

    return (
      <div>
        <Nav />
        <h3 className="text-center">Header Display</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>Header</h2>
            <Link className="btn btn-lg btn-success" to='/test'>home </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;