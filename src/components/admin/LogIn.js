import { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styling/Login.css';
import '../../Styling/Login.scss';

import ManageDesigns from './ManageDesigns';

export default class login extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            username: 'Admin',
            password: 'Admin',
            Auth: false,
            Error: false,
            Forget: false,
        };
    }

    handlerSubmit = ( e ) => {
        e.preventDefault();
        if ( e.target.user.value === 'Admin' && e.target.pass.value === 'Admin' ) {
            this.setState( {
                Auth: true,
                Error: false
            } );
            this.props.onSubmit( true );
        }
        else {
            this.setState( {
                Error: true,
                Forget: false
            } );
        }

    };
    handlerForget = () => {
        this.setState( {
            Forget: true,
            Error: false
        } );
    };
    render () {
        return (
            <div className='background-login'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className='admin_main_container'>
                    {this.state.Auth ? <ManageDesigns /> : <span className='login'>
                    </span>
                    }
                </div>
                <div className='form-box'>
                    <h2>Login</h2>
                    <form className='form' onSubmit={this.handlerSubmit}>
                        <div className='admin-login-input'>
                            <input type='text' required name='user' className="admin-input" />
                            <label>Username</label>
                        </div>
                        <div className='admin-login-input'>
                            <input type='password' required name='pass' className="admin-input" />
                            <label>Password</label>
                        </div>
                        {this.state.Error && <Alert key='danger' variant='danger'>
                            Your password and user is not Correct
                        </Alert>}
                        {this.state.Forget && <Alert key='light' variant='light'>
                            Please contact your Admin to have a new password</Alert>}
                        <input id="submit" type="submit" name="" value="Log In" />
                    </form>
                    <p>  <a href='#' onClick={this.handlerForget}>Forget Password?</a> </p>
                </div>
            </div>

        );
    }
}