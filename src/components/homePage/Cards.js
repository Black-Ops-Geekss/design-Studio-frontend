import React, { Component } from 'react';
import '../../Styling/Cards.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Card, Nav } from 'react-bootstrap';
import swal from 'sweetalert';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorize: '',
      mapImages: [],
      designsArray: [],
    };
  }
  handleNews = (e) => {
    e.preventDefault();
    swal ("Subscribed!", "You have been subscribed to our news letter.", "success");
  }

  renderingImages = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER}/getCategories`);
    this.setState({
      designsArray: res.data,
      mapImages: res.data
    });
  };

  componentDidMount() {
    this.renderingImages();
  }

  // filter images by category
  handlerSubmit = (e) => {
    e.preventDefault();
    this.setState({
      categorize: e.target.value,
    });
    this.handlerFilter(e.target.value);

  };
  handlerFilter = (categorize) => {
    if (categorize === 'All') {
      let images = this.state.designsArray;

      this.setState({
        mapImages: images,
      });
    }
    else {
      let images = this.state.designsArray.filter((img) => {
        return img.category === categorize;
      });

      this.setState({
        mapImages: images
      });
    }
  };

  render() {

    return (
      <>
        {/* <Container className='form'>
          <Form.Group className="mb-3">
            <Form.Label> Select Category</Form.Label>
            <Form.Select onChange={this.handlerSubmit}>
              <option>All</option>
              <option>galaxy</option>
              <option>jordan</option>
              <option>skeleton</option>
              <option>rose</option>
              <option>baby groot</option>
              <option>robot</option>
            </Form.Select>
          </Form.Group>
        </Container> */}

        {/* 
        <Container className='form'>
        <Nav fill variant="tabs" onChange={this.handlerSubmit}>
            <Nav.Item>
              <Nav.Link value='all' >All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link value='Galaxy' eventKey="galaxy">Galaxy </Nav.Link >
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cool">Cool</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fashion">Fashion</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Pint</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container> */}



        <Container className='images'>

          {this.state.mapImages.map(img => {
            return (

              <Card key={img._id} style={{ width: '20rem' }}>
                <Card.Img src={img.url} alt="img" variant="top" />
                <Card.Body className='card-body-1'>
                  <Card.Title>{img.category.toUpperCase()}</Card.Title>
                  <Card.Text>
                    Price: {img.price}
                  </Card.Text>
                  <Link to={`./ClickedCard/${img._id}`}> <Button variant="primary" className='button-card'>See on T-shirt</Button></Link>
                </Card.Body>
              </Card>
            )
          })}
        </Container>

        <Form id="inputUrl">
          <Form.Group className="mb-3">
            <Form.Label>Subscribe to News Letter</Form.Label>
            <Form.Control id="inputUrl" type="url" placeholder="Enter your email ..." />
            <Button  variant="primary" type="submit" style={{backgroundColor:'#591BC5' , marginTop:'10px', border:'none'}} onClick={this.handleNews}>
            Subscribe
            </Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default Cards;

