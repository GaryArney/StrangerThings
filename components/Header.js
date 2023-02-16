import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    

    return (
        <>
            <header>
                <Link to='/'>Main List</Link>
                {
                    props.loggedIn ?
                    <Link to='/login'>MAKE PATH TO LOGOUT PAGE</Link>:
                    <>
                    <Link to='/login'>   Log-in</Link>
                    <Link to='/'>   Home</Link>
                    <Link to='/profile'>    Profile</Link>
                    <Link to='/register'>   Register</Link>

                    </>
                // <h3>Home</h3>
                // <h3>Posts</h3>
                // <h3>Profile</h3>
                // <h3>Log in</h3>
                // <h3>Logout</h3>

                }
            </header>
        
        
        </>
    )



}

export default Header