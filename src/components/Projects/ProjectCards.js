import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { FormLabel, Row } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.appStore} target="_blank">
          <FaAppStoreIos /> &nbsp;
          {"App store"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {props.playStore && (
          <Button
            variant="primary"
            href={props.playStore}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaGooglePlay /> &nbsp;
            {"Play store"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
