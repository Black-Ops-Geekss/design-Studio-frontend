import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';


export default function UpdateDesign () {

  const { id } = useParams();
  const [ design, setDesign ] = useState();

  async function fetchData () {
    const { data } = await axios.get( `${process.env.REACT_APP_SERVER}/getSelection/${id}` );
    console.log( data[ 0 ] );
    setDesign( data[ 0 ] );
  }

  const update = async ( e ) => {
    e.preventDefault();
    let price = e.target.price.value;
    price = /[0-9]/.test( price ) ? parseInt( price ) + ' JD' : price;
    const data = {
      'category': e.target.category.value !== '' ? e.target.category.value : design.category,
      'url': e.target.url.value !== '' ? e.target.url.value : design.url,
      'price': price !== '' ? price : design.price,
    };
    await axios.put( `${process.env.REACT_APP_SERVER}/editDesign/${id}`, { data } );
    swal( "Design edited successfully!", "click the button to continue!", "success" );


  };

  useEffect( () => {
    fetchData();
  }, [] );

  return (
    <Form style={{ margin: "10px 30px" }} onSubmit={update}>
      <Form.Group className="mb-3" >
        <Form.Label>Design Category</Form.Label>
        <Form.Control id="category" type="text" placeholder={`${design?.category}`} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Design url</Form.Label>
        <Form.Control id="url" type="url" placeholder={`${design?.url}`} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Design Price</Form.Label>
        <Form.Control id="price" type="number" placeholder={`${design?.price}`} />
      </Form.Group>

      <Button variant="primary" type="submit" className='button-card-2' style={{ margin: 'auto', textAlign: 'center' }}>
        Save Changes
      </Button>
    </Form>
  );
}
