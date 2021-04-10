/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css';
import jaira from '../images/jaira.png'
import dania from '../images/Dania.jpg'
import kris from '../images/kris.jpg'
import jaimie from '../images/jaimie.jpg'
import andrew from '../images/andrew.png'
import graciela from '../images/graciela.png'

function About() {
  return (
    <div id="aboutbg">
      <div className="container">
      <main className="row">
            <div className="card" id="description">
              <h1 className="title" id="title">Ounce Counts Creators</h1>
            <hr />
              <div className="card-body">
              Introducing the creators of Ounce Counts. <br></br>We are a team of full stack engineering students who set out on an adventure to
              help you pack safely for yours. <br></br>Navigate your way through our application to build a backpack or create a wolfpack for you and your gang.
            </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src={dania} alt="Dania Rinker" id="picture" />
                  <div className="bio">
                  <p>Dania Rinker<br />
                    <a href="https://www.linkedin.com/in/dania-rinker/" target="_blank">LinkedIn</a><br />
                    <a href="https://github.com/daniarinker" target="_blank">GitHub</a>
                  </p>
                </div>
                </div>
                  <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src={jaimie} alt="Jaimie Valle" id="picture"/>
                    <div className="bio">
                    <p>Jaimie Valle<br />
                      <a href="https://www.linkedin.com/in/jaimie-valle-6a8ab81ab/" target="_blank">LinkedIn</a><br />
                      <a href="https://github.com/jsvalle123" target="_blank">GitHub</a>
                    </p>
                  </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src={kris} alt="Kris Arushanov" id="picture"/>
                    <div className="bio" id="kris">
                    <p>Kris Arushanov<br />
                      <a href="https://www.linkedin.com/in/kris-arushanov-39623a115/" target="_blank">LinkedIn</a><br />
                      <a href="https://github.com/krisarushanov" target="_blank">GitHub</a>
                    </p>
                  </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src={jaira} alt="Jaira Arcilla" id="picture"/>
                    <div className="bio">
                    <p>Jaira Arcilla<br />
                      <a href="https://www.linkedin.com/in/jairarcilla/" target="_blank">LinkedIn</a><br />
                      <a href="https://github.com/jairalynn" target="_blank">GitHub</a>
                    </p>
                  </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src={graciela} alt="Graciela Garcia" id="picture"/>
                    <div className="bio">
                    <p>Graciela Garcia<br />
                      <a href="https://www.linkedin.com/in/graciela-garcia-2298291b3/" target="_blank">LinkedIn</a><br />
                      <a href="https://github.com/graciela23garcia" target="_blank">GitHub</a>
                    </p>
                  </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src={andrew} alt="Andrew Park" id="picture"/>
                    <div className="bio">
                    <p>Andrew Park<br />
                      <a href="https://www.linkedin.com/in/andrew-park-b6602b15/" target="_blank">LinkedIn</a><br />
                      <a href="https://github.com/awpdev" target="_blank">GitHub</a>
                    </p>
                    </div>
                  </div>
            </div>
    </main>
</div>
    </div>
  );
}

export default About;
