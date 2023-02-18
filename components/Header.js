import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    
    const logOut = () => {
        window.localStorage.removeItem('token');
        props.setLoggedIn(false);
    }

    return (
        
            <header>
                <Link to='/'>Main List</Link>
                

                    <>
                    <Link to='/login'>   Log-in</Link>
                    <Link to='/profile'>    Profile</Link>
                    <Link to='/newpost'>   New Post</Link>
                    <Link to='/delete'>    Delete Post</Link>
                    <Link to='/edit'>     EditPost</Link>
                    <Link to='/message'>    Message</Link>
                    <Link to='/test'      >Test</Link>
                    <Link to='/login' onClick={logOut}>Logout</Link>
                    {
                        props.isLoggedIn ?
                        
                        <>
                        <Link to='/login' onClick={logOut}>Logout</Link>
                        <Link to='/profile'>    Profile</Link>
                        </>
                        :
                        null
                    }

                    </>

                
            </header>
        
        
        
    )



}

export default Header