import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styling/createDesign.css';
import axios from 'axios';

export default function CreateOwnDesign () {

  const [ userUrl, setUserUrl ] = useState( '' );
  const [ removedItem, setRemovedItem ] = useState( '' );


  const handlerAddToCart = ( e ) => {
    e.preventDefault();

    if ( localStorage.getItem( 'addedItemKey' ) === "null" ) {
      localStorage.setItem( 'addedItemKey', JSON.stringify( [ userUrl ] ) );
    } else {
      let userCart = JSON.parse( localStorage.getItem( 'addedItemKey' ) );
      userCart.push( userUrl );
      localStorage.setItem( 'addedItemKey', JSON.stringify( userCart ) );
    }
  };

  const formInput = ( e ) => {
    e.preventDefault();
    if ( e.target.inputUrl.value !== "" ) {
      setUserUrl( e.target.inputUrl.value );
    } else {
      alert( `Please enter a valid url !` );
    }
  };

  const removeBG = async ( e ) => {
    e.preventDefault();
    const encodedParams = new URLSearchParams();
    encodedParams.append( "image_url", userUrl );
    const options = {
      method: 'POST',
      url: 'https://background-removal.p.rapidapi.com/remove',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
        'X-RapidAPI-Host': 'background-removal.p.rapidapi.com'
      },
      data: encodedParams
    };

    await axios.request( options ).then( function ( response ) {
      setRemovedItem( response.data.response.image_url );
    } ).catch( function ( error ) {
      console.error( error );
    } );
  };

  return (
    <div className='createdesign'>
      <div>
        <Form onSubmit={formInput} id="inputUrl">
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control id="inputUrl" type="url" placeholder="Enter url ..." />
            <Button className='button' variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div>
        {userUrl !== "" &&
          <Card style={{ width: '18rem' }} className="cardSt" >
            <Card.Img variant="top" src={userUrl} alt="error 404" />
            {removedItem &&
              <Card.Img variant="top" src={removedItem} alt="error 404" />
            }
          </Card>
        }
      </div>
      <div>
        <form >
          <button type="submit" onClick={removeBG} className="btn btn-primary">See on T-shirt</button>
          <button type="submit" onClick={handlerAddToCart} className="btn btn-primary">Add to Cart</button>
        </form>
      </div>
    </div>
  );
}