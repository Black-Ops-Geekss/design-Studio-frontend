import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import '../../Styling/Profile.css';


class Profile extends Component {
  render () {
    return (
      <div className="admin-profile">
      <Card style={{ width: '18rem' }} className="admin-card">
        <Card.Body>
        <Card.Img variant="top" src="https://i.ibb.co/6XMk94T/admin.jpg" className="profile__img" />
          <Card.Title className="profile__name"></Card.Title>
          <Card.Text className='profile__occupation'>
            Username: Admin<br />
            Password: Admin
          </Card.Text>
          <Card.Text className='profile__availability'>
          <div className="circle"></div>
           <span>Available</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }
};

export default Profile;
