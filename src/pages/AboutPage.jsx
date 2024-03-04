//import React from 'react';

// import stylings
import './AboutPage.css';

// import picture of myself
import profilepicture from "../assets/William_Mason_Iceland_Waterfall_Pic.jpg";

// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
    return (
      <div className="container pt-4">

        <section className="features-icons bg-light text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
                  <h3>Welcome to my page!</h3>
                  <img src={profilepicture} className="profile-image" alt='Picture of William Mason standing in front of Gulfoss Falls in Iceland'></img>
                  <p className="lead mb-0">
                  My name is William Mason.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>
        <p>
        I am a full stack web developer with a robust foundation in autonomous vehicles software, applied mathematics, and statistics. I am excited to fall down the rabbit hole that is software engineering and web development. In my free time, I can be found training for my next marathon or half-Ironman. I am also a self-proclaimed cinephile and card-carrying member of the AMC Stubs A-List, but my Letterboxd is not up to date, so my Strava will have to do below for now. Happy coding and thanks for stoping by!
        </p>
      </div>
    );
  }
  