import axios from 'axios';
import { useEffect, useState } from 'react';
import LoadingSpinner from './Spinner';
import { useParams } from 'react-router-dom';
import tshirt from './tshirt.png';
import blacktshirt from './blacktshirt.jpg';

import '../../Styling/ClickedCard.css';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';


localStorage.setItem( 'addedItemKey', "null" );
export default function ClickedCard () {

    const [ Url, setUrl ] = useState( '' );
    const [ removedItem, setRemovedItem ] = useState( '' );
    const { id } = useParams();

    const getDesign = async ( selectedId ) => {
        await axios.get( `${process.env.REACT_APP_SERVER}/getSelection/${selectedId}` ).then( res => {
            setUrl( res.data[ 0 ].url );
           ["galaxy","jordan"].includes(res.data[0].category)?setRemovedItem( res.data[ 0 ].url ):removeBG( res.data[ 0 ].url );
        } ).catch( err => {
            console.log( err );
        } );
    };


    useEffect( () => {
        getDesign( id );
    } );

    const removeBG = async ( AD ) => {

        const encodedParams = new URLSearchParams();
        encodedParams.append( "image_url", AD );
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


    const handlerAddToCart = ( e ) => {
        e.preventDefault();
        if ( localStorage.getItem( 'addedItemKey' ) === "null" ) {
            localStorage.setItem( 'addedItemKey', JSON.stringify( [ Url ] ) );
        } else {
            let userCart = JSON.parse( localStorage.getItem( 'addedItemKey' ) );
            userCart.push( Url );
            localStorage.setItem( 'addedItemKey', JSON.stringify( userCart ) );
        }
        swal( "Item Added to Your Cart!", "", "success" );

    };


    return (
        <div>
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

           
            <Container style={{display:'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
           <div className="con-remove-t">
      <img src={tshirt}  className='t-shirt-img'  alt="img" />
      <img src={removedItem?removedItem:Url}  className='design-img-ch' alt="" />
    </div>

    <div className="con-remove-t">
      <img src={blacktshirt}  className='t-shirt-img'  alt="img" />
      <img src={removedItem?removedItem:Url}  className='design-img-ch' alt="" />
    </div>


          
        </Container>
            <form style={{textAlign:'center', marginBottom:'30px'}} onSubmit={handlerAddToCart}>
                <button type="submit" className="btn btn-primary">Add to Cart</button>
            </form>
        </div>
    );
}

