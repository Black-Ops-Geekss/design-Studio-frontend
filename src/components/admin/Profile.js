import React, { Component } from 'react'

// "Hi admin" with a drop down menu, contains the options of: view admin info and sign out option (when the sign out pressed, redirect to the user home page)
class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile-header">
                    <h1>Hi admin</h1>
                    <div className="profile-dropdown">
                        <div className="profile-dropdown-item">
                            <a href="/admin/profile">View admin info</a>
                        </div>
                        <div className="profile-dropdown-item">
                            <a href="/">Sign out</a>
                        </div>
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-body-item">
                        <h2>Admin info</h2>
                        <p>Name: admin</p>
                        <p>Email:
                            <a href="mailto:

                            ">

                            </a>
                        </p>
                        <p>Phone:
                            <a href="tel:

                            ">

                            </a>
                        </p>
                    </div>
                    <div className="profile-body-item">
                        <h2>Admin info</h2>
                        <p>Name: admin</p>
                        <p>Email:
                            <a href="mailto:

                            ">

                            </a>
                        </p>
                        <p>Phone:
                            <a href="tel:

                            ">

                            </a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Profile;