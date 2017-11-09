import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

class Resume extends Component {
  render() {
    return (
      <div className="row fixedHeight text-center">
          <div className="col-md-4 d-none d-md-block mx-auto">
            <Sidebar />
          </div>
          <div className="d-block d-sm-none">
            <Navbar />
          </div>
        <div className="col-md-8 App">
          <div className="row">
            <div className="col-md-5"/>
            <div className="col-md-1">
              <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1ecIdovljemb5OAhK5gYYwN8uAGqaMn-d/view?usp=sharing">pdf</a>
            </div>
            <div className="col-md-1">
            < a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1fJtJkTjtlYD0rX5LX-KNfu7TnVlXEwuS/view?usp=sharing"> txt</a>
            </div>
            <div className="col-md-5"/>
          </div>
          <div className="row">
            <div className="col-md-1"/>
            <div className="col-md-10 embed-responsive embed-responsive-1by1">
              <iframe title="resume" src="https://docs.google.com/document/d/e/2PACX-1vTvBYVT6cyErDUOHoRIutz-lWsCIEGd2_uTlQkxBulMwDVTjfKVSP0DG7uqY0M9en57G4JirEoLv_Ik/pub?embedded=true"></iframe>
            </div>
          <div className="col-md-1"/>
          </div>
        </div>
      </div>
    );
  }
}
export default Resume;
