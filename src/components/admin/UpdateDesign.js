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
    setDesign( data );
  }

  const update = async ( e ) => {
    e.preventDefault();
    let price = e.target.price.value;
    price = parseInt( price ) + ' JD';
    const data = {
      'title': e.target.title.value !== '' ? e.target.title.value : design.title,
      'url': e.target.url.value !== '' ? e.target.url.value : design.url,
      'price': price !== '' ? price : design.price,
    };
    await axios.put( `${process.env.REACT_APP_SERVER}/editDesign/${id}`, { data } );
    swal( "Design edited successfully!", "click the button to continue!", "success" );


  };

  useEffect( () => {
    fetchData();
  } );

  return (
    <Form style={{ margin: "10px 30px" }} onSubmit={update}>
      <Form.Group className="mb-3" >
        <Form.Label>Design Title</Form.Label>
        <Form.Control id="title" type="text" defaultValue={design?.title} placeholder="Enter New Title" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Design url</Form.Label>
        <Form.Control id="url" type="text" defaultValue={design?.url} placeholder="New Design Url" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Design Price</Form.Label>
        <Form.Control id="price" type="text" defaultValue={design?.price} placeholder="Enter New Price" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
}
