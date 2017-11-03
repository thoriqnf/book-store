import React from "react";
import { Link } from "react-router";
import Sidebar from "../sideBar/SideBar";
import MainFrame from "../mainframe/MainFrame";
import { Container, Row, Col } from "reactstrap";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Welcome to Simple library</h1>
          <p>Simple library that provided all your books</p>
          <Link to="about" className="btn btn-primary btn-lg">
            Borrow now
          </Link>
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
