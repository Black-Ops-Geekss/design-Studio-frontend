import React, { Component } from 'react';
import Images from './Images.json';
import '../../Styling/Cards.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

 class Cards extends Component {
    constructor(props){
        super(props);
        this.state={
         categorize:'',
         mapImages:Images,
        }
    }


    handlerSumbit=(e)=>{
      e.preventDefault();
       this.setState({
        categorize:e.target.value,
       });
      this.handlerFilter(e.target.value);
      console.log(e.target.value)

    }
    handlerFilter=(categorize)=>{
      if(categorize==='All'){
      let images=Images;
      
      this.setState({
        mapImages:images,
      })
      }
      else{
        let images=Images.filter((img)=>{
            return img.category===categorize;
        })
    
        this.setState({
            mapImages:images
        })
        console.log(images);
      }
    }

  render() {


    return (
        <>
        <Container className='form'>
      <Form.Group className="mb-3">
        <Form.Label> select Categorize</Form.Label>
        <Form.Select onChange={this.handlerSumbit}>
          <option>All</option>
          <option>galaxy</option>
          <option>cool</option>
          <option>fashion</option>
          <option>paint</option>
        </Form.Select>
      </Form.Group>
      </Container>
      <Container className='images'>
        {this.state.mapImages.map(img=>{
            return <img key={img._id} src={img.url} alt="img"/>
        })}
      </Container>
      </>
    )
  }
}

export default Cards;
