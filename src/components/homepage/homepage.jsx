import React from "react";
import "./homepage.css";
const Homepage = ({ setLoginUser }) => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Myself, Pushpendra Kumar !</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              A passionate fronted developer currently purusing my Btech in
              Information Technology from Madan Mohan Malaviya University Of
              Technology
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <a
                  href="#about"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span onClick={() => setLoginUser({})}>Log Out</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
