import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Sidebar extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>Romance</ListGroupItem>
        <ListGroupItem>Thirller</ListGroupItem>
        <ListGroupItem>Biografi</ListGroupItem>
        <ListGroupItem>Science</ListGroupItem>
        <ListGroupItem>Story</ListGroupItem>
      </ListGroup>
    );
  }
}
