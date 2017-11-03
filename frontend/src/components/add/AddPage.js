import React, {PropTypes} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddPage extends React.Component {
  render() {
    return(

      <Form>
            <FormGroup>
              <Label for="bookTitle">Book title</Label>
              <Input type="text" name="title" id="bookTitle" placeholder="book title" />
            </FormGroup>
            <FormGroup>
            <Label for="bookGenre">Book genre</Label>
              <Input type="text" name="genre" id="bookGenre" placeholder="book genre" />
            </FormGroup>
            <FormGroup>
            <Label for="bookDes">Book description</Label>
            <Input type="textarea" name="description" id="bookDes" placeholder="description" />
            </FormGroup>
            <FormGroup>
            <Label for="bookAuthor">Book author</Label>
              <Input type="text" name="author" id="bookAuthor" placeholder="author" />
            </FormGroup>
            <FormGroup>
            <Label for="bookPublisher">Book publisher</Label>
              <Input type="text" name="publisher" id="bookPublisher" placeholder="publisher" />
            </FormGroup>
            <FormGroup>
            <Label for="bookPages">Book pages</Label>
              <Input type="number" name="pages" id="bookPages" placeholder="pages" />
            </FormGroup>
            <FormGroup>
            <Label for="imgURL">Book image</Label>
              <Input type="URL" name="image" id="imgURL" />
            </FormGroup>
            <FormGroup>
            <Label for="buyURL">Buy URL</Label>
              <Input type="URL" name="buyURL" id="buyURL" />
            </FormGroup>

            <Button color="primary">Submit</Button>
          </Form>
    );
  }
}

export default AddPage;
