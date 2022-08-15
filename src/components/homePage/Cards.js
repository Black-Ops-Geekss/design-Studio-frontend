import React, { Component } from 'react';
import '../../Styling/Cards.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Cards extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      categorize: '',
      mapImages: [],
      designsArray: [],
      // categories: ["galaxy", "cool", "fashion", "paint"],
    };
  }

  renderingImages = async () => {
    const res = await axios.get( `${process.env.REACT_APP_SERVER}/getCategories` );
    this.setState( {
      designsArray: res.data,
      mapImages: res.data
    } );
  };

  componentDidMount () {
    this.renderingImages();
  }

  // filter images by category
  handlerSubmit = ( e ) => {
    e.preventDefault();
    this.setState( {
      categorize: e.target.value,
    } );
    this.handlerFilter( e.target.value );

  };
  handlerFilter = ( categorize ) => {
    if ( categorize === 'All' ) {
      let images = this.state.designsArray;

      this.setState( {
        mapImages: images,
      } );
    }
    else {
      let images = this.state.designsArray.filter( ( img ) => {
        return img.category === categorize;
      } );

      this.setState( {
        mapImages: images
      } );
    }
  };

  render () {

    return (
      <>
        <Container className='form'>
          <Form.Group className="mb-3">
            <Form.Label> Select Category</Form.Label>
            <Form.Select onChange={this.handlerSubmit}>
              <option>All</option>
              <option>galaxy</option>
              <option>cool</option>
              <option>fashion</option>
              <option>paint</option>
            </Form.Select>
          </Form.Group>
        </Container>
        <Container className='images'>

          {this.state.mapImages.map( img => {
            return <Link to={`./ClickedCard/${img._id}`}><img key={img._id} src={img.url} alt="img" /></Link>;
          } )}
        </Container>
      </>
    );
  }
}

export default Cards;
