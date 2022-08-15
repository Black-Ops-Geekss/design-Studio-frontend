import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
// "Hi admin" with a drop down menu, contains the options of: view admin info and sign out option (when the sign out pressed, redirect to the user home page)
class Profile extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.ibb.co/6XMk94T/admin.jpg" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Username: Admin<br/>
                Password: Admin
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
};

export default Profile;