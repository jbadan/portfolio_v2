import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';

class Resume extends Component {
  render() {
    return (
      <div className="row fixedHeight text-center">
        <Sidebar />
        <div className="col-md-8 App">
          <a target="_blank" href="https://drive.google.com/file/d/1ecIdovljemb5OAhK5gYYwN8uAGqaMn-d/view?usp=sharing">pdf version</a> <br/>
          <a target="_blank" href="https://drive.google.com/file/d/1fJtJkTjtlYD0rX5LX-KNfu7TnVlXEwuS/view?usp=sharing">  .txt version</a>
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vTvBYVT6cyErDUOHoRIutz-lWsCIEGd2_uTlQkxBulMwDVTjfKVSP0DG7uqY0M9en57G4JirEoLv_Ik/pub?embedded=true"></iframe>
        </div>
      </div>
    );
  }
}
export default Resume;
