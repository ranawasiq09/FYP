import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <hr className="mt-5" />
      <Container>
        <footer className="fotter mt-5">
          <div className="container py-3 py-sm-5">
            <div className="row">
              <div className=" col-6 col-lg-3">
                <h5>Quick links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>What's new?</a>
                  </li>
                  <li>
                    <a>Support</a>
                  </li>
                  <li>
                    <a>My account</a>
                  </li>
                  <li>
                    <a>Cancel subscription</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-3">
                <h5>Information</h5>
                <ul className="list-unstyled">
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                  <li>
                    <a>Partnership</a>
                  </li>
                </ul>
              </div>
              <div className=" col-6 col-lg-3">
                <h5>Follow us</h5>
                <ul className="list-unstyled">
                  <li>
                    <a>
                      <i class="fab fa-facebook pr-1 "></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        className="fab fa-instagram pr-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-twitter pr-1" aria-hidden="true"></i>{" "}
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-youtube pr-1" aria-hidden="true"></i>{" "}
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        className="fab fa-linkedin pr-1"
                        aria-hidden="true"
                      ></i>{" "}
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div class=" col-6 col-lg-3">
                <h5>Our location:</h5>
                <address>
                  <strong>Lahore</strong>
                  <br></br>
                   Office 350 5th Avenue<br></br>
                  Lahore, Punjab 10118<br></br>
                  <i className="fa fa-fw fa-phone pr-4" aria-hidden="true"></i>
                  <span>Phone:</span>{" "}
                  <a id="info" href="tel:+923054013209">
                    03054013209
                  </a>
                  <br></br>
                  <i className="fa fa-fw fa-inbox pr-4" aria-hidden="true"></i>
                  <span>Mail:</span>{" "}
                  <a id="info" href="mailto:info@agritech.com">
                    info@agritech.com
                  </a>
                </address>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-9">
                <ul className="list-inline">
                  <li className="list-inline-item">Copyright &copy; AgriTech</li>
                  <li className="list-inline-item">All rights reserved.</li>
                  <li className="list-inline-item">
                    <a data-toggle="modal" data-target="#modal">
                      Terms of use and privacy policy
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </footer>
  );
};

export default Footer;
