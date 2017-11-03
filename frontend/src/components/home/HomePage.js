import React from "react";
import { Link } from "react-router";
import Sidebar from "../sideBar/SideBar";
import Carousel from "./Carousel";
import MainFrame from "../mainframe/MainFrame";
import { Container, Row, Col,CardBody } from "reactstrap";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="carousel">
          <CardBody>
            <Carousel />{" "}
          </CardBody>
          <hr/>
          <br/>

        </div>
        <Container className="belowJumbo">
          <Row>
            <Col xs={2}>
              <Sidebar />
            </Col>
            <Col xs={9}>
              <MainFrame />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
