import React, { Component } from 'react';
import './App.css';
import './Home.css';
import Sidebar from './Sidebar';

class Home extends Component {
  render() {
    return (
      <div className="Home container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="row">
              <img className="img-responsive img-circle logoImage" alt="jenna" src="/jenna.jpg" />
            </div>
            <div className="row">
              <h1> Jenna Badanowski</h1>
            </div>
            <div className="row">
              <h2>Web Developer</h2>
            </div>
            <div className="row">
              <button>About</button>
              <button>Projects</button>
              <button>Contact</button>
            </div>
            <div className="row">
              <a href="https://www.linkedin.com/in/jenna-badanowski-6b672261/"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
              <a href="/"><i className="fa fa-file-o fa-2x" aria-hidden="true"></i></a>
              <a href="https://github.com/jbadan"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Home;
