import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateDesign extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target.url.value;
        console.log(form);
    }
  render() {
    return (
      <div>
        <Form className="mb-3" onSubmit={this.handleSubmit}>
          <Form.Group controlId="url">
            <Form.Label>Enter a valid url for your image</Form.Label>
            <Form.Control type="text" placeholder="Enter url"/>
            <Form.Text className="text-muted">
              We'll never share your data with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" value="Submit">
        Submit
      </Button>
          </Form>
        </div>
    )
  }
}
