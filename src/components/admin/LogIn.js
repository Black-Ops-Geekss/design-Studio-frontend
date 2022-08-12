import { Component } from 'react'

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Admin',
            password: 'Admin',
            Auth: false // true if admin is logged in
        };
    }
    
    render() {

        return (
            <div>
                <div>
                    update the state of the Auth variable to true if the username and password match
                </div>

          <div>use a pre-defined username and password (Admin,Admin) to Log in to admin dashboard
           (manage designs, manage employees) </div>
            </div>
        )
    }
}
