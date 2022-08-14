import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styling/createDesign.css';

export default class CreateDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userUrl: ''
    }
  }

  formInput = (e) => {
    e.preventDefault();
    if (e.target.inputUrl.value !== ""){
    this.setState({userUrl: e.target.inputUrl.value })
  }else {
   alert(`Please enter a valid url !`)
  }
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
        <Card style={{ width: '18rem' }} className= "cardSt" >
          { this.state.userUrl !== "" &&
            <Card.Img variant="top" src={this.state.userUrl} alt="error 404" />
          }
          </Card>
      </div>
      </div>
    )
  }
}

/*Form for the user to enter the image URL and a submit button. 
then send axios request to removeBG for the required image to render it in 
the card shown below the form*/