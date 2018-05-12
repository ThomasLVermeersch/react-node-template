import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { authFunction } from '../utils/api-access';

class TestComponent extends Component {

  constructor() {
    super();
    this.state = { data : [] };
  }

  getAuthData() {
    authFunction().then((data) => {
      this.setState({ data });
    });
  }

  componentDidMount() {
    this.authfunction;
  }

  render() {

    const { data } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Header Display</h3>
        <hr/>

        { data.map((data, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title"><span className="btn">#{ data.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { data.something } </p>
                  </div>
                </div>
              </div>
          ))}
  
        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>Header</h2>
            <Link className="btn btn-lg btn-success" to='/'>home </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TestComponent;
