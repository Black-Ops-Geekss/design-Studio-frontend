import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ManageDesigns extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      mapImages: [],
      designsArray: [],
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

  deleteDesign = async ( id ) => {
    let a = prompt( "Type `DELETE` to confirm" );

    console.log( a );
    if ( a === "DELETE" ) {
      await axios.delete( `${process.env.REACT_APP_SERVER}/deleteDesign/${id}` );
      this.renderingImages();
    }
  };

  render () {

    return (
      <div className="about" id="about" >
<h2 className="main-title">Manage Designs</h2>
<div className="container">
  {this.state.designsArray.map( ( card ) => {
    return (
      <div className="box">
        <img src={card.url} alt="img" />
        <div className='contentfull'>
          <div className="content">
          <h4>Category : {card.category}</h4>
            <h4>price : {card.price}</h4>
          
          </div>
          <div className="info">
          <Link to={`/Admin/editDesign/${card._id}`}><Button className="button-card-2"
           >
          Edit
          </Button>
          </Link>
          <Button
             className='button-card-2'
             onClick={() => this.deleteDesign( card._id )}
          >
          Delete
         </Button>
          </div>
        </div>
      </div>
    );
  } )}
</div>
</div>
    );
  }
}
