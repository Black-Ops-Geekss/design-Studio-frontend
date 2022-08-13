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

    handleSubmit = (e) => {

        e.preventDefault();
        console.log(this.state);
        if (this.state.username === 'Admin' && this.state.password === 'Admin') {
            this.setState({ Auth: true });
            console.log('in login', this.state.Auth);
            this.props.onSubmit(true);
        }
    }
    
    render() {

        return (
            <div>
                <div>

                    <form onSubmit={this.handleSubmit}>

                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>


                    update the state of the Auth variable to true if the username and password match
                </div>

          <div>use a pre-defined username and password (Admin,Admin) to Log in to admin dashboard
           (manage designs, manage employees) </div>
            </div>
        )
    }
}
