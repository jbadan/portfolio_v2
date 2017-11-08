import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';

class NotFound extends Component {
  render() {
    return (
      <div className="row fixedHeight text-center">
      <Sidebar />
        <div className="col-md-8 App">
          <h1> Whoops! That{`'`}s not a page.</h1>
          <iframe src="https://giphy.com/embed/13ywPzPJdfhmBG" width="300" height="200" frameBorder="0"></iframe>
          <a href="/">Back to home </a>
        </div>
      </div>
    );
  }
}
export default NotFound;
