import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';

class NotFound extends Component {
  render() {
    return (
      <div className="row">
        <Sidebar />
        <div className="col-md-8">
          <h1> not found</h1>
        </div>
      </div>
    );
  }
}
export default NotFound;
