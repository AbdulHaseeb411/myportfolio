import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Abdul Haseeb Mehmood</span>
                 and I'm from <span className="yellow">Pakistan.</span>
                <br />
                <br />
                I am currently pursuing a Bachelor's degree in <b className="yellow">Artificial Intelligence</b>.
                Additionally, I have completed a 3-year diploma in <b className="yellow">Software Engineering</b> from Aptech Center.
                <br />
                <br />
                  I have a strong passion for <b className="yellow">Automation</b> and <b className="yellow">Generative AI</b> projects.
                  <br />
                  <br />
                  I have developed <b className="yellow">17+ projects</b>, including:
                  <ul>
                    <li>WhatsApp Automation</li>
                    <li>Article Scraping</li>
                    <li>Web Researcher Tool</li>
                    <li>Limitless Use Of WebResearcher using GPT-4</li>
                  </ul>
                  <br />
                  One of my notable projects is a <b className="yellow">MERN-based Web Researcher Tool</b> where I integrated <b className="yellow">GPT-4</b>
                  according to client requirements. It generates cold emails and provides useful insights based on real-time data inputs.
                  <br />
                  <br />
                  I am always eager to explore new technologies and build innovative solutions to enhance efficiency and productivity.
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Feel free to <span className="yellow">connect</span> with me!
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/AbdulHaseeb411"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                 
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/haseeb-mahmood-79a936336/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  
                  
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
}

export default About;
