import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth0 } from '@auth0/auth0-react';


function AuthButtons () {
        const {
    isAuthenticated
} = useAuth0();
    return (
        <div>
            {!isAuthenticated &&
                <Login />
            }
            {isAuthenticated &&
                <Logout />
            }
        </div>
    );
}
export default AuthButtons;