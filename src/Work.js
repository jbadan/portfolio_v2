import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';

class Work extends Component {
  render() {
    return (
      <div className="row fixedHeight text-center">
        <Sidebar />
        <div className="col-md-8 App">
          <h1> work </h1>
        </div>
      </div>
    );
  }
}
export default Work;
