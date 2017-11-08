import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';

class Contact extends Component {
  render() {
    return (
      <div className="row fixedHeight text-center">
        <Sidebar />
        <div className="col-md-8 App">
          <h1> contact </h1>
        </div>
      </div>
    );
  }
}
export default Contact;
