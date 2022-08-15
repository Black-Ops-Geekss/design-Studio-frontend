import { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styling/Login.css';
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
            <>
                {this.state.Auth ? <ManageDesigns /> : <div className='login'>
                    <div className='form-box'>
                        <form className='form' onSubmit={this.handlerSubmit}>
                            <input type='text' className='input' placeholder='User ID' required name='user' />
                            <input type='password' className='input' placeholder='Enter password' required name='pass' />
                            {this.state.Error && <Alert key='danger' variant='danger'>
                                Your password and user is not Correct
                            </Alert>}
                            <a href='#' onClick={this.handlerForget}>Forget Password</a>
                            {this.state.Forget && <Alert key='light' variant='light'>
                                Please contact your Admin to have a new password</Alert>}
                            <button type='submit' className='submit'>Login</button>
                        </form>
                    </div>
                </div>
                }
            </>
        );
    }
}

