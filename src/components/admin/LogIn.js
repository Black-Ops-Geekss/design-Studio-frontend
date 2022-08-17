import {  useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styling/Login.css';
import ManageDesigns from './ManageDesigns';
import { MdVpnKey } from "react-icons/md"; // https://react-icons.github.io/react-icons/icons?name=md



function Login (props){

    const [Auth, setAuth] = useState(false);
    const [Error, setError] = useState(false);
    const [Forget, setForget] = useState(false);

    const handlerSubmit = (e) => {
        e.preventDefault();
        if ( e.target.user.value === 'Admin' && e.target.pass.value === 'Admin' ) {
           
            setAuth(true)
            setError(false)
          
           props.onSubmit( true );
        }
        else {
            setError(true);
            setForget(false);
        }
    }

    const handlerForget = (Forget) => {
        setError(false);
        setForget(true);
    }


        return (
            <div className='admin_main_container'>
                {Auth ? <ManageDesigns /> : <div className='login'>
                    <div className='form-box'>
                        <h2>Admin Login</h2>
                        <MdVpnKey className='admin-login-icon' />
                        <form className='form' onSubmit={handlerSubmit}>
                            <div className='admin-login-input'>
                                <input type='text' required name='user' className="admin-input" />
                                <label>Username</label>
                            </div>
                            <div className='admin-login-input'>
                                <input type='password' required name='pass' className="admin-input" />
                                <label>Password</label>
                            </div>
                            {Error && <Alert key='danger' variant='danger'>
                                Your password and user is not Correct
                            </Alert>}
                        
                            <input id="submit" type="submit" name="" value="Submit" />
                        </form>
                        <br />
                        <p>  <a href='#' onClick={handlerForget}>Forget Password?</a> </p>
                        {Forget && <Alert key='light' variant='light'>
                                Please contact your Admin to have a new password</Alert>}
                    </div>
                </div>
                }
            </div>
        );
    
}

export default Login;

