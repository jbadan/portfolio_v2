import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

class Contact extends Component {
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
            <div className="col-md-1"/>
            <div className="col-md-10 embed-responsive embed-responsive-1by1">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8QuW6fr2DG2K8bzEDxopJBx5jDxihB234Wsyl9EjlcBwsiQ/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
            <div className="col-md-1"/>
          </div>
      </div>
    </div>
    );
  }
}
export default Contact;
