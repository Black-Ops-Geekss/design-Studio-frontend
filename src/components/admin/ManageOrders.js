import axios from 'axios';
import React, { Component } from 'react'

export default class ManageOrders extends Component {

constructor(props) {
    super(props);
    this.state = {
        ordersArray: [],
    };
}

  RenderOrders = async () => {
    const res = await axios.get(`http://localhost:3001/sendOrders`);
    this.setState({ ordersArray: res.data,});
    console.log(res.data);
  }

  componentDidMount () {
    this.RenderOrders();
  }


  render() {
    return (
      <div>ManageOrders</div>
    )
  }
}
