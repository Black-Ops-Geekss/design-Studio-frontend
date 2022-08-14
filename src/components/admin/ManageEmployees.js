import React from 'react'
import Card from '../../components/Card'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ManageEmployees() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Manage Employees</h4>
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
                        Email
                      </th>
                      <th>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.employees.map(employee => (
                      <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>
                          <Link to={`/admin/employees/edit/${employee.id}`}>
                            <Button color="primary" size="sm">
                              Edit
                            </Button>
                          </Link>
                          <Button

                            color="danger"
                            size="sm"
                            onClick={() => this.props.deleteEmployee(employee.id)}
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
      </div>
    </div>

           

    
  )
}
