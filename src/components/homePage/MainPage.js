import React, { Component } from 'react'
import Cards from './Cards'
import Carousel from './Carousel'
import { Link } from "react-router-dom";
// import CreateCard from './CreateCard'

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Cards />
        <div>
          <Link to="/CreateDesign" className="a" style={{ margin: '0px 15px' }} >Create Your Own Design ?</Link>
        </div>
      </div>
    )
  }
}
