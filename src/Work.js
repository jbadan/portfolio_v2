import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import habitrackComp from './habitrackComp.png';
import theiaComp from './theiaComp.png';
import halloDoggosComp from './halloDoggosComp.png';
import perapsisComp from './perapsisComp.png';
import tictacComp from './tictacComp.png';


class Work extends Component {
  render() {
    return (
      <div className="row fixedHeight text-center">

      <Sidebar />

        <div className="col-md-8 App">
          <div className="row">
            <div className="col-md-12">
              <h1 className="title spacing">Recent Projects</h1>
              <h4 className="spacing"> Take a look at my <a  target="_blank"href="https://github.com/jbadan">github</a> for more projects. </h4>
            </div>
          </div>
          <div className="row projectRowHeight">
            <div className="col-sm-5">
              <a target="_blank" href="#"><img className="example" src={habitrackComp} /></a>
            </div>
            <div className="col-sm-6">
              <h4>Project 4 Placeholder             <a  target="_blank" href="#"><i className="fa fa-github" aria-hidden="true"></i></a></h4>
              <p className="text-left"><strong>Contributors:</strong> Solo project</p>
              <p className="text-left"><strong>Technology:</strong> Node.js, Express, React, Mongo, D3, Material UI & Recharts </p>
              <p className="text-left">
                <strong>Description: </strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan tortor nec tortor imperdiet, in mollis nibh laoreet.
                 Curabitur dapibus auctor lacus, eu semper libero. Sed suscipit, ex id venenatis malesuada,
              </p>
              <a target="_blank" href="#">View Site</a>
            </div>
            <div className="col-sm-1"></div>
          </div>


          <div className="row projectRowHeight">
            <div className="col-sm-5">
              <a target="_blank" href="http://theiafacialrecognition.herokuapp.com/"><img className="example" src={theiaComp} /></a>
            </div>
            <div className="col-sm-6">
              <h4>Theia              <a target="_blank" href="https://github.com/jbadan/faceExpressAuth"><i className="fa fa-github" aria-hidden="true"></i></a></h4>
              <p className="text-left"><strong>Contributors:</strong> Solo Project</p>
              <p className="text-left"><strong>Technology:</strong> Node.js, Express, Microsoft Azure Face API, Chart.js, Cloudinary, PostgreSQL, Bootstrap, Animate.css</p>
              <p className="text-left">
                <strong>Description: </strong>
                A face detection app that will detect one or more human faces and provide data visualization for face attributes using machine
                learning-based predictions of facial features. </p>
                <a target="_blank" href="http://theiafacialrecognition.herokuapp.com/">View Site</a>
            </div>
            <div className="col-sm-1"></div>
          </div>

          <div className="row projectRowHeight">
            <div className="col-sm-5">
              <a target="_blank" href="http://habitrackapp.herokuapp.com/"><img className="example" src={habitrackComp} /></a>
            </div>
            <div className="col-sm-6">
              <h4>Habitrack             <a target="_blank" href="https://github.com/jbadan/habitrack"><i className="fa fa-github" aria-hidden="true"></i></a></h4>
              <p className="text-left"><strong>Contributors:</strong> <a target="_blank" href="#">Matthew Bell</a>, <a target="_blank" href="#">Lauren Perez</a>, <a target="_blank" href="#">Evan Haala</a></p>
              <p className="text-left"><strong>Technology:</strong> Node.js, Express, React, Mongo, D3, Material UI & Recharts </p>
              <p className="text-left">
                <strong>Description: </strong>
                Full stack MERN app that gamifies habit tracking. It allows a user to track daily habits, set weekly goals and view
                real-time and in-depth analytics relating to their usage and goal attainment.
              </p>
              <a target="_blank" href="http://habitrackapp.herokuapp.com/">View Site</a>
            </div>
            <div className="col-sm-1"></div>
          </div>

          <div className="row projectRowHeight">
            <div className="col-sm-5">
              <a target="_blank" href="http://hallodoggos.herokuapp.com/"><img className="example" src={halloDoggosComp} /></a>
            </div>
            <div className="col-sm-6">
              <h4>HalloDoggos           <a target="_blank" href="https://github.com/jbadan/hallo-doggos"><i className="fa fa-github" aria-hidden="true"></i></a></h4>
              <p className="text-left"><strong>Contributors:</strong> <a target="_blank" href="www.mary-walton.com">Mary Walton</a> & <a target="_blank" href="https://www.michellechungdesign.com/">Michelle Chung</a></p>
              <p className="text-left"><strong>Technology:</strong> Node.js, Express, React, Bootstrap </p>
              <p className="text-left">
                <strong>Description: </strong>
                24-hr Hackathon with e-commerce/ Halloween theme. Collaborated with two UX designers to produce a Buzzfeed-style quiz,
                with the results pointing you to the best costume for your pet.
              </p>
              <a target="_blank" href="http://hallodoggos.herokuapp.com/">View Site</a>
            </div>
            <div className="col-sm-1"></div>
          </div>


            <div className="row projectRowHeight">
              <div className="col-sm-5">
                <a target="_blank" href="https://jbadan.github.io/platformGame/"><img className="example" src={perapsisComp} /></a>
              </div>
              <div className="col-sm-6">
                <h4>Periapsis            <a target="_blank" href="https://github.com/jbadan/platformGame"><i className="fa fa-github" aria-hidden="true"></i></a></h4>
                <p className="text-left"><strong>Contributors:</strong> Solo project </p>
                <p className="text-left"><strong>Technology: </strong>Vanilla Javascript, Phaser.io, GIMP </p>
                <p className="text-left">
                  <strong>Description: </strong>
                  Platformer game using Phaser.io and Javascript. Choose between playing an astronaut or robot character.
                  Dodge alien enemies and obstacles while collecting stars in order to reach your spaceship, then guide your spaceship
                  through asteroids and flying enemies home to Earth.
                </p>
                <a target="_blank" href="https://jbadan.github.io/platformGame/">View Site</a>
              </div>
              <div className="col-sm-1"></div>
            </div>

            <div className="row projectRowHeight">
              <div className="col-sm-5">
                <a target="_blank" href="https://jbadan.github.io/tic-tac-toe/"><img className="example" src={tictacComp} /></a>
              </div>
              <div className="col-sm-6">
                <h4>Tic Tac Toe           <a target="_blank" href="https://github.com/jbadan/tic-tac-toe"><i className="fa fa-github" aria-hidden="true"></i></a></h4>
                <p className="text-left"><strong>Contributors:</strong> Solo project </p>
                <p className="text-left"><strong>Technology: </strong>Vanilla Javascript</p>
                <p className="text-left">
                  <strong>Description: </strong>
                  Play the classic game of X's and O's vs. the computer or 2 player.
                </p>
                <a target="_blank" href="https://jbadan.github.io/tic-tac-toe/">View Site</a>
              </div>
              <div className="col-sm-1"></div>
            </div>

        </div>
      </div>
    );
  }
}
export default Work;
