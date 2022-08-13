import React, { Component } from 'react'
import Cards from './Cards'
import Carousel from './Carousel'
import CreateCard from './CreateCard'

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Cards />
        <CreateCard />
      </div>
    )
  }
}
