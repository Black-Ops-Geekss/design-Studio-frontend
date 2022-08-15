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

  editDesign = async ( id ) => {
    let a = prompt( "Type `EDIT` to confirm" );

    console.log( a );
    if ( a === "EDIT" ) {
      await axios.put( `${process.env.REACT_APP_SERVER}/editDesign/${id}` );
      this.renderingImages();
    }
  };


  render () {



    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Manage Designs</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>
                          Design
                        </th>
                        <th>
                          Price
                        </th>
                        <th>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.designsArray.map( design => (
                        <tr >
                          <td>
                            <img src={design.url} alt={design.title} style={{ width: "250px" }} />
                          </td>
                          <td>{design.price}</td>
                          <td>

                            <Link to={`/Admin/ManageDesigns/editDesign/${design._id}`}><Button
                            >
                              Edit
                            </Button>
                            </Link>
                            <Button
                              color="danger"
                              size="sm"
                              onClick={() => this.deleteDesign( design._id )}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ) )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}