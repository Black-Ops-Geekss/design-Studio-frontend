import React, { useEffect, useReducer, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import swal from 'sweetalert';
import '../../Styling/Form.css';
import axios from "axios";
import { Container } from "react-bootstrap";

import OrderImage from  './D.png';
export default function Cart () {


    const [ collectMethod, setCollectMethod ] = useState( 'test' );
    const [ userArray, setUserArray ] = useState( [] );
    const [ , forceUpdate ] = useReducer( x => x + 1, 0 );



    const handleSelect = ( e ) => {
        setCollectMethod( e.target.value );
    };

    const form = useRef();

    function handleClick () {
        forceUpdate();
    }

    const handleRemove = ( e, index ) => {
        e.preventDefault();
        handleClick();
        if ( userArray.length !== 0 ) {
            userArray.splice( index, 1 );
            setUserArray( userArray );
            localStorage.setItem( 'addedItemKey', JSON.stringify( userArray ) );
        }

    };




    useEffect( () => {
        setUserArray( JSON.parse( localStorage.getItem( 'addedItemKey' ) ) );
    }, [] );

    const sendEmail = async ( e ) => {
        e.preventDefault();
        let userCart = JSON.parse( localStorage.getItem( 'addedItemKey' ) );

        let order = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "phone": e.target.phone.value,
            "location": e.target.location.value
        };

        const newOrder = {
            "name": order.name,
            "email": order.email,
            "phone": order.phone,
            "location": order.location,
            "items": userCart,
        };

        await axios.post( `${process.env.REACT_APP_SERVER}/userRequest`, { newOrder } ).then( () => {
            emailjs.sendForm( 'service_wnvjbmc', 'template_6t03lfw', form.current, 'ug0blzHMhGz4I5o6P' )
                .then( ( result ) => {
                    console.log( result.text );  // if the order was sent successfully this code is executed
                }, ( error ) => {
                    console.log( error.text ); // if the order was NOT sent successfully this code is executed
                } );

            localStorage.removeItem( 'addedItemKey' );
            swal( "Order Sent!", "It will be ready within 2 hours!", "success" );

            e.target.reset();
        }
        ).catch( err => {
            console.log( err );
        }
        );
    };
    return (
        <div>
            <div>
                {userArray && (
                    <>
                     <div className="cart-div">
                        <div className="overlay-cart"></div>
                        {userArray.map( ( item, index ) => {
                            return (
                                <div className="cart-cart-div" key={index}>
                                    <img src={item} alt={`Item #${index}`} className="img-cart-order" />
                                    <button onClick={( e ) => handleRemove( e, index )} className="remove-button-cart">Remove</button>
                                </div>
                            );
                        }
                        )}
                    </div>
                    </>
                )
                }
            </div>
            <Container >
            <div className="form-and-map">

<form ref={form} onSubmit={sendEmail} className='order-form'>
    <label>Name</label>
    <input id="name" type="text" name="user_name" required/>
    <label>Email</label>
    <input id="email" type="text" name="user_email" />
    <label>Phone Number</label>
    <input id="phone" type="text" name="user_number"   required />
    <br></br>
    <label>Select City</label>
    <select id="location" name='location' value={collectMethod} onChange={handleSelect}>
        <option value="amman">Amman</option>
        <option value="ajloun">Ajloun</option>
        <option value="aqaba">Aqaba</option>
        <option value="irbid">Irbid</option>
        <option value="mafraq">Mafraq</option>
        <option value="zarqa">Zarqa</option>
    </select>
    {collectMethod === 'deliver' &&
        <div>
            <label>Insert your home address</label>
            <input type="text" name="user_address" />
        </div>
    }
    <label>Add more details if you wish:</label>
    <textarea name="message" />
    <input type="submit" value="Send" />

</form>

</div>
            </Container>

        </div>

    );
};