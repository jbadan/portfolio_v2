import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';

class Work extends Component {
  render() {
    return (
      <div className="row fixedHeight text-center">
        <Sidebar />
        <div className="col-md-8 App">
          <div className="row">
            <div className="col-md-12">
              <h1 className="title spacing">Recent Projects</h1>
              <h4 className="spacing"> Take a look at my <a href="https://github.com/jbadan">github</a> for more projects. </h4>
            </div>
          </div>
          <div className="row projectRowHeight">
            <div className="col-sm-5">
              <a href="#"><img className="example" src="./habitrackComp.png" /></a>
            </div>
            <div className="col-sm-6">
              <h4>Project 4 Placeholder             <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></h4>
              <p className="text-left"><strong>Contributors:</strong> Solo project</p>
              <p className="text-left"><strong>Technology:</strong> Node.js, Express, React, Mongo, D3, Material UI & Recharts </p>
              <p className="text-left">
                <strong>Description: </strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan tortor nec tortor imperdiet, in mollis nibh laoreet.
                 Curabitur dapibus auctor lacus, eu semper libero. Sed suscipit, ex id venenatis malesuada,
              </p>
              <a href="#">View Site</a>
            </div>
            <div className="col-sm-1"></div>
          </div>


          <div className="row projectRowHeight">
            <div className="col-sm-5">
              <a href="http://theiafacialrecognition.herokuapp.com/"><img className="example" src="./theiaComp.png" /></a>
            </div>
            <div className="col-sm-6">
              <h4>Theia              <a href="https://github.com/jbadan/faceExpressAuth"><i className="fa fa-github" aria-hidden="true"></i></a></h4>
              <p className="text-left"><strong>Contributors:</strong> Solo Project</p>
              <p className="text-left"><strong>Technology:</strong> Node.js, Express, Microsoft Azure Face API, Chart.js, Cloudinary, PostgreSQL, Bootstrap, Animate.css</p>
              <p className="text-left">
                <strong>Description: </strong>
                A face detection app that will detect one or more human faces and provide data visualization for face attributes using machine
                learning-based predictions of facial features. </p>
                <a href="http://theiafacialrecognition.herokuapp.com/">View Site</a>
            </div>
            <div className="col-sm-1"></div>
          </div>

          <div className="row projectRowHeight">
            <div className="col-sm-5">
              <a href="http://habitrackapp.herokuapp.com/"><img className="example" src="./habitrackComp.png" /></a>
            </div>
            <div className="col-sm-6">
              <h4>Habitrack             <a href="https://github.com/jbadan/habitrack"><i className="fa fa-github" aria-hidden="true"></i></a></h4>
              <p className="text-left"><strong>Contributors:</strong> <a href="#">Matthew Bell</a>, <a href="#">Lauren Perez</a>, <a href="#">Evan Haala</a></p>
              <p className="text-left"><strong>Technology:</strong> Node.js, Express, React, Mongo, D3, Material UI & Recharts </p>
              <p className="text-left">
                <strong>Description: </strong>
                Full stack MERN app that gamifies habit tracking. It allows a user to track daily habits, set weekly goals and view
                real-time and in-depth analytics relating to their usage and goal attainment.
              </p>
              <a href="http://habitrackapp.herokuapp.com/">View Site</a>
            </div>
            <div className="col-sm-1"></div>
          </div>

          <div className="row projectRowHeight">
            <div className="col-sm-5">
              <a href="http://hallodoggos.herokuapp.com/"><img className="example" src="./HalloDoggosComp.png" /></a>
            </div>
            <div className="col-sm-6">
              <h4>HalloDoggos           <a href="https://github.com/jbadan/hallo-doggos"><i className="fa fa-github" aria-hidden="true"></i></a></h4>
              <p className="text-left"><strong>Contributors:</strong> <a href="#">Mary Walton</a> & <a href="#">Michelle Chung</a></p>
              <p className="text-left"><strong>Technology:</strong> Node.js, Express, React, Bootstrap </p>
              <p className="text-left">
                <strong>Description: </strong>
                24-hr Hackathon with e-commerce/Halloween theme. Collaborated with two UX designers to produce a Buzzfeed-style quiz,
                with the results pointing you to the best costume for your pet.
              </p>
              <a href="http://hallodoggos.herokuapp.com/">View Site</a>
            </div>
            <div className="col-sm-1"></div>
          </div>


            <div className="row projectRowHeight">
              <div className="col-sm-5">
                <a href="https://jbadan.github.io/platformGame/"><img className="example" src="./theiaComp.png" /></a>
              </div>
              <div className="col-sm-6">
                <h4>Periapsis            <a href="https://github.com/jbadan/platformGame"><i className="fa fa-github" aria-hidden="true"></i></a></h4>
                <p className="text-left"><strong>Contributors:</strong> Solo project </p>
                <p className="text-left"><strong>Technology: </strong>Vanilla Javascript, Phaser.io, GIMP </p>
                <p className="text-left">
                  <strong>Description: </strong>
                  Platformer game using Phaser.io and Javascript. Choose between playing an astronaut or robot character.
                  Dodge alien enemies and obstacles while collecting stars in order to reach your spaceship, then guide your spaceship
                  through asteroids and flying enemies home to Earth.
                </p>
                <a href="https://jbadan.github.io/platformGame/">View Site</a>
              </div>
              <div className="col-sm-1"></div>
            </div>

        </div>
      </div>
    );
  }
}
export default Work;
