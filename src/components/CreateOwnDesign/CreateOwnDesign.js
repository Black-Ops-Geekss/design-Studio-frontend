import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styling/createDesign.css';
import '../../Styling/ClickedCard.css';
import axios from 'axios';
import tshirt from '../homePage/tshirt.png';
import blacktshirt from '../homePage/blacktshirt.jpg';

import '../../Styling/ClickedCard.css';
import LoadingSpinner from '../homePage/Spinner';
import swal from 'sweetalert';
import { Container } from 'react-bootstrap';

export default function CreateOwnDesign () {

  const [ userUrl, setUserUrl ] = useState( '' );
  const [ removedItem, setRemovedItem ] = useState( '' );
  const [ userRemoveBG, setuserRemoveBG ] = useState( false );



  const handlerAddToCart = ( e ) => {
    e.preventDefault();

    if ( localStorage.getItem( 'addedItemKey' ) === "null" ) {
      localStorage.setItem( 'addedItemKey', JSON.stringify( [ userUrl ] ) );
    } else {
      let userCart = JSON.parse( localStorage.getItem( 'addedItemKey' ) );
      userCart.push( userUrl );
      localStorage.setItem( 'addedItemKey', JSON.stringify( userCart ) );
    }
    swal( "Item Added to Your Cart!", "", "success" );

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
    setuserRemoveBG( true );
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
      console.log( response.data.image_url );
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
            <Button style={{marginTop:"10px"}} className='button-card-2' variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div>
        {userUrl !== "" && !userRemoveBG&&
          <Card style={{ width: '18rem' }} className="cardSt" >
            <Card.Img variant="top" src={userUrl} alt="error 404" />
          </Card>
        }
      </div>
      <div>

        <div>
          {userRemoveBG &&(
            <>
            {!removedItem && (
                <>
            <h2 style={{textAlign: 'center', marginTop: '50px'}}>Please Wait Until We Remove The Background </h2>
                <LoadingSpinner />
                </>
            )
            }
             {removedItem && (
                <>
            <h2 style={{textAlign: 'center', marginTop: '50px'}}>See The Magic</h2>
                </>
            )
            }
            </>
          )}
          {removedItem&& (
            <>
          <Container style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
           <div className="con-remove-t">
      <img src={tshirt}  className='t-shirt-img'  alt="img" />
      <img src={removedItem?removedItem:userUrl}  className='design-img-ch' alt="" />
    </div>

    <div className="con-remove-t">
      <img src={blacktshirt}  className='t-shirt-img'  alt="img" />
      <img src={removedItem?removedItem:userUrl}  className='design-img-ch' alt="" />
    </div>


          
        </Container>
            </>
          )}
        </div>
        {userUrl !== "" && (
          <>
        <form  style={{textAlign:'center', marginBottom:'30px'}} >
          <button style={{marginRight:"10px"}} type="submit" onClick={removeBG} className="button-card-2">See on T-shirt</button>
          <button type="submit" onClick={handlerAddToCart} className="button-card-2">Add to Cart</button>
        </form>
          </>
        )}

      </div>
    </div>
  );
}