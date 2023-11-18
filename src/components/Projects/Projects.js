import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import catholicconnect from "../../Assets/Projects/catholic_connect.png";
import acare from "../../Assets/Projects/acare_india.jpeg";
import hardhat from "../../Assets/Projects/hardhat.png";
import phlenuCustomer from "../../Assets/Projects/phlenu_customer.png";
import phlenuBusiness from "../../Assets/Projects/phlenubusinessicon.png";
import phlenuDelivery from "../../Assets/Projects/phlenu_delivery.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hardhat}
              isBlog={false}
              title="Hardhat"
              description="Hardhat connects construction businesses to work more efficiently. It provides a way to connect with co-workers, manage health and safety in construction, and handle material management. This solution is built on top of Salesforce."
              appStore="https://apps.apple.com/us/app/hardhat/id1543678167"
              playStore="https://play.google.com/store/apps/details?id=com.hardhat.hardhat&hl=en_US"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acare}
              isBlog={false}
              title="Acare India"
              description="Acare india is the health care application . In this app containmany therapies. User can enroll the therapy via referral code andget some daily and weekly activities. There are many otherfeatures in app like :- Medication, articles , Reports and etc."
              appStore="https://github.com/soumyajit4419/Chatify"
              playStore="https://play.google.com/store/apps/details? id=com.abbott.epd.acare"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phlenuCustomer}
              isBlog={false}
              title="Phlenu Customer"
              description="Phlenu is eCommerce platform currently It's working in Ghana and Nigeria. Phlenu provide facility to merchant to sell the products online. Currently merchant selling products,deals,events and services using phlenu app. Customer can also start chat with merchant in the app."
              appStore="https://apps.apple.com/in/app/phlenu-shopping/id1446910253"
              playStore="https://play.google.com/store/apps/details?id=com.phlenu.application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phlenuBusiness}
              isBlog={false}
              title="Phlenu Business"
              description="Phlenu is eCommerce platform currently It's working in Ghana and Nigeria. Phlenu provide facility to merchant to sell the products online. Currently merchant selling products,deals,events and services using phlenu app. Customer can also start chat with merchant in the app."
              appStore="https://apps.apple.com/in/app/phlenu-business/id1446880518"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phlenuDelivery}
              isBlog={false}
              title="Phlenu Delivery"
              description="Phlenu is eCommerce platform currently It's working in Ghana and Nigeria. Phlenu provide facility to merchant to sell the products online. Currently merchant selling products,deals,events and services using phlenu app. Customer can also start chat with merchant in the app."
              appStore="https://apps.apple.com/in/app/phlenu-delivery/id1483890270"
              playStore="https://play.google.com/store/apps/details?id=com.phlenu.delivery"
            />
          </Col>

          <Col md={4} className="project-card">
             <ProjectCard
              imgPath={catholicconnect}
              isBlog={false}
              title="Catholic Connect"
              description="Catholic connect is religions based project. This app created in react native. It's long running project and client continuous update this app.In this app people connect to the each other and connect with parish. Every people can create his own business and company and share his post ."
              appStore="https://itunes.apple.com/us/app/catholic-connect/id1433546806?mt=8"
              playStore="https://play.google.com/store/apps/details? id=com.catholicconnect&hl=en"
            />
          </Col>

        {/*  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
