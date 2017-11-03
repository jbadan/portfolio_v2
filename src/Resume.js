import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';

class Resume extends Component {
  render() {
    return (
      <div className="row fixedHeight text-center">
        <Sidebar />
        <div className="col-md-8 App">
          <a href="#">Click here for a downloadable version</a>
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vTvBYVT6cyErDUOHoRIutz-lWsCIEGd2_uTlQkxBulMwDVTjfKVSP0DG7uqY0M9en57G4JirEoLv_Ik/pub?embedded=true"></iframe>
        </div>
      </div>
    );
  }
}
export default Resume;
