import React, { Component } from 'react'
import ChosenCards from './ChosenCards'
import Form from './Form'

export default class Cart extends Component {
  render() {
    return (
      <div>
        <ChosenCards />
        <Form />

      </div>
    )
  }
}
