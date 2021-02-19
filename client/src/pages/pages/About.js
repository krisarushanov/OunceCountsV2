/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import jaira from '../images/jaira.png'
import dania from '../images/Dania.jpg'
import kris from '../images/kris.jpg'

function About() {
  return (
    <div>
      <div className="container">
      <main className="row">
            <h1 className="title">Ounce Counts Creators</h1>
            <hr />
            <div className="card">
              <div className="card-body">
                  These students were matched up together to work on group projects. 
                  They thouroughly enjoy working with one another 
            </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src={dania} alt="Dania Rinker" id="picture" />
                  <p>Dania Rinker<br />
                    <a href="" target="_blank">LinkedIn</a><br />
                    <a href="https://github.com/daniarinker" target="_blank">GitHub</a>
                  </p>
                </div>
                <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src="" alt="Andrew Park" id="picture"/>
                    <p>Andrew Park<br />
                      <a href="https://www.linkedin.com/in/andrew-park-b6602b15/" target="_blank">LinkedIn</a><br />
                      <a href="https://github.com/awpdev" target="_blank">GitHub</a>
                    </p>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src="" alt="Jaimie Valle" id="picture"/>
                    <p>Jaimie Valle<br />
                      <a href="" target="_blank">LinkedIn</a><br />
                      <a href="https://github.com/jsvalle123" target="_blank">GitHub</a>
                    </p>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src="" alt="Graciela Garcia" id="picture"/>
                    <p>Graciela Garcia<br />
                      <a href="" target="_blank">LinkedIn</a><br />
                      <a href="https://github.com/graciela23garcia" target="_blank">GitHub</a>
                    </p>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src={kris} alt="Kristena Arushanov" id="picture"/>
                    <p>Kristena Arushanov<br />
                      <a href="" target="_blank">LinkedIn</a><br />
                      <a href="https://github.com/krisarushanov" target="_blank">GitHub</a>
                    </p>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <img className="img-fluid portfolio-pictures" src={jaira} alt="Jaira Arcilla" id="picture"/>
                    <p>Jaira Arcilla<br />
                      <a href="https://www.linkedin.com/in/jairarcilla/" target="_blank">LinkedIn</a><br />
                      <a href="https://github.com/jairalynn" target="_blank">GitHub</a>
                    </p>
                  </div>
            </div>
    </main>
</div>
    </div>
  );
}

export default About;
