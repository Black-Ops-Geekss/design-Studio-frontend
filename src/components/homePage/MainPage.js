import React, { Component } from 'react'
import Cards from './Cards'
// import Carousel from './Carousel'
import Hero from './Hero'
export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Cards />
      </div>
    )
  }
}
