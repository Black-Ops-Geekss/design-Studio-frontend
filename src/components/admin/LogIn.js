import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styling/Login.css';
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Admin',
            password: 'Admin',
            Auth: false,
            Error: false,
            Forget: false,
        };
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        if (e.target.user.value === 'Admin' && e.target.pass.value === 'Admin') {
            this.setState({
                Auth: true,
                Error: false
            });
        }
        else {
            this.setState({
                Error: true,
                Forget: false
            })
        }

    }
    handlerForget = () => {
        this.setState({
            Forget: true,
            Error: false
        });
    }
    render() {
        return (
            <>
                {this.state.Auth ? <h1>'Your user name and password is Correct'</h1> : <div className='login'>
                    <div className='form-box'>

                        <form className='form' onSubmit={this.handlerSubmit}>
                            <input type='text' className='input' placeholder='User ID' required name='user' />
                            <input type='password' className='input' placeholder='Emter password' required name='pass' />
                            {this.state.Error && <Alert key='danger' variant='danger'>
                                Your password and user is not Correct
                            </Alert>}
                            <a href='#' onClick={this.handlerForget}>Forget Passowd</a>
                            {this.state.Forget && <Alert key='light' variant='light'>
                                This is a  alert—check it out        </Alert>}
                            <button type='submit' className='submit'>Login</button>
                        </form>
                    </div>
                </div>
                }
            </>
        )
    }
}

export default login
