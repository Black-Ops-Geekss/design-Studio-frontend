import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ShowOnCard from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styling/createDesign.css';

export default class CreateDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userUrl: '',
      showOnCard: false,
    }
  }

  handlerAddToCart = (e) => {
    e.preventDefault();

    if (localStorage.getItem('addedItemKey') === "null") {
        localStorage.setItem('addedItemKey', JSON.stringify([this.state.userUrl]));
    } else {
        let userCart = JSON.parse(localStorage.getItem('addedItemKey'));
        userCart.push(this.state.userUrl);
        localStorage.setItem('addedItemKey', JSON.stringify(userCart));
    }
}

  formInput = (e) => {
    e.preventDefault();
    // console.log(e.target.inputUrl.value);
    if (e.target.inputUrl.value !== ""){
    this.setState({userUrl: e.target.inputUrl.value })
  }else {
   alert(`Please enter a valid url !`)
  }
  }

  handleShowOnCard = (e) => {
    e.preventDefault();
    this.setState({showOnCard: !this.state.showOnCard })
  }

 

  render() {
    return (
      <div className='createdesign'>
        <div>
          <Form onSubmit={(e)=>{this.formInput(e)}} id="inputUrl">
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control id="inputUrl" type="url" placeholder="Enter url ..." />
              <Button className='button' variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div> 
        <div >

          { this.state.userUrl !== "" &&
        <Card style={{ width: '18rem' }} className= "cardSt" >
            <Card.Img variant="top" src={this.state.userUrl} alt="error 404" />
          </Card>
          }
      </div>
      <div>
       

        <form >

        <button type="submit" onClick={this.handleShowOnCard} className="btn btn-primary">See on T-shirt</button>
        <button type="submit" onClick={this.handlerAddToCart} className="btn btn-primary">Add to Cart</button>
        </form>
      {/* <form onSubmit={}>

</form> */}
      </div>

          <div>


        {this.state.showOnCard &&
        (<div>
          <ShowOnCard />
          </div>)

        }

        </div>
      </div>
    )
  }
}

/*Form for the user to enter the image URL and a submit button. 
then send axios request to removeBG for the required image to render it in 
the card shown below the form*/