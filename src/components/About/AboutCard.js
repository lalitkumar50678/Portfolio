import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lalit kumar </span>
            from <span className="purple"> Jodhpur. India</span>
            <br /> I have around 8 years of experience in mobile application development.
            I have around 4 years of experience in react native technology.
            I am worked on many complex projects like hardhat, Acare india , 
            phlenu and catholic connect.
            <br />
            Additionally, I am currently working as a snior software developer at
            Bacancy.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (Cricket)
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lalit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
