import axios from 'axios';
import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class ManageOrders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ordersArray: [],
    };
  }

  RenderOrders = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER}/sendOrders`);
    this.setState({ ordersArray: res.data});
    console.log(res.data);
  }

  componentDidMount() {
    this.RenderOrders();
  }


  deleteOrder = async (id) => {

    let adminAnswer = prompt("Type `DELETE` to confirm");

     if (adminAnswer === "DELETE") {
       await axios.delete(`${process.env.REACT_APP_SERVER}/deleteOrder/${id}`);
       this.RenderOrders();
     }
   }

   confirmOrder = async (id) => {

    let adminAnswer = prompt("Type `CONFIRM` to confirm that order is delivered");

     if (adminAnswer === "CONFIRM") {
       await axios.delete(`${process.env.REACT_APP_SERVER}/deleteOrder/${id}`);
       this.RenderOrders();
     }
   }

  render() {
    return (
      <>
        { this.state.ordersArray.filter(filterDesign => filterDesign.items !== null).map(design => (
         <div>
              <Card style={{ width: '25rem' }}>
              <Carousel fade>
{design.items.map(url => (

  <Carousel.Item>
    <img
      className="d-block"
      src={url}
      alt="imageOrder"
      height="500"
      width="400"
    />
  </Carousel.Item >
 ) )}
 </Carousel >
      <Card.Body>
        <Card.Title>{design.name}</Card.Title>
        <Card.Text>
        {design.phone}<br/>
         {design.email}
        </Card.Text>
        <Button onClick={()=>this.deleteOrder(design._id)} variant="primary">Delete order</Button>
        <Button onClick={()=>this.confirmOrder(design._id)} variant="primary">Confirm Order</Button>

      </Card.Body>
    </Card>
</div>
      ))}
      </>
    )
  };
};
