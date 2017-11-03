import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import seattle from './seattle.png';

class About extends Component {
  render() {
    return (
      <div className="row fixedHeight text-center">
        <Sidebar />
        <div className="col-md-8 App">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <h1 className="title spacing"> Hi, I{`'`}m Jenna. </h1>
              <p className="text-left"> I{`'`}m a web developer with a social sciences background. My training in psychology provides me with the analytical skills, grasp of statistics,
              effective communication and an understanding of group dynamics that make me an asset to any team. These complement my technical skillset allow for novel,
              people-centered perspectives on tough problems.</p>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <div className="row">
            <img className="mx-auto d-block seattle" src={seattle}/>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="row padding">
                <div className="col-sm-3 underline my-auto padding">Languages</div>
                <div className="col-sm-3 underline my-auto">Frameworks & Libraries</div>
                <div className="col-sm-3 underline my-auto padding">Databases</div>
                <div className="col-sm-3 underline my-auto padding">Other</div>
              </div>
              <div className="row">
              <div className="col-sm-3">HTML5/CSS3/ JavaScript, Ruby, SQL</div>
              <div className="col-sm-3">Bootstrap, Phaser.io, Rails, Express, Node, JQuery, React, Material UI, Chart.js</div>
              <div className="col-sm-3">PostgreSQL, Sequelize, MongoDB</div>
              <div className="col-sm-3">AJAX, RESTful web services, Git, VBA, Microsoft Office, Sharepoint, IBM Cognos BI, PeopleSoft, UltiPro</div>
              </div>

            </div>
            <div className="col-sm-1"></div>

          </div>
        </div>
      </div>
    );
  }
}
export default About;
