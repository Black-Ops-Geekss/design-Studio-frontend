import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class ChosenCards extends Component {
  render() {
    return (
      <Container>
      <div>render the Chosen products as a list, and provide the option for remove item form cart, and a confirm order process.
        when the user press confirm order, he will be redirected to a form to fill his information.
        save the user info + the chosen products IDs in the DB </div>
        </Container>
    )
  }
}
