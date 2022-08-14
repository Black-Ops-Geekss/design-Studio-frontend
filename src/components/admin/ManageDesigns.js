import React from "react";
import Card from "../../components/Card";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export default function ManageDesigns() {
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
                        Name
                      </th>
                      <th>
                        Price
                      </th>
                      <th>
                        Description
                      </th>
                      <th>
                        Image
                      </th>
                      <th>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.designs.map(design => (
                      <tr key={design.id}>
                        <td>{design.name}</td>
                        <td>{design.price}</td>
                        <td>{design.description}</td>
                        <td>
                          <img src={design.image} alt={design.name} />
                        </td>
                        <td>
                          <Link to={`/admin/designs/edit/${design.id}`}>
                            <Button color="primary" size="sm">
                              Edit
                            </Button>
                          </Link>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => this.props.deleteDesign(design.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Delete Design</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this design?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Cancel
            </Button>{" "}
            <Button color="danger" onClick={this.toggle}>
              Delete
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}