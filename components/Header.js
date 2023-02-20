import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    
    const logOut = () => {
        window.localStorage.removeItem('token');
        props.setLoggedIn(false);
        console.log('login set to false');
    }

    return (
        <>
            <header>
            <Link to='/'>Main List</Link>                                                                                  
                    {
                        props.loggedIn ?      
                        
                        <>
                       
                        <Link to='/profile'>    Profile</Link>
                        <Link to='/newpost'>  New Post</Link>
                        <Link to='/login' onClick={logOut}>Logout</Link>
                        <Link to='/search'>Search</Link> 
                        </>
                        :
                        <>
                        <Link to='/login'>Log in</Link>  
                        <Link to='/register'>Register</Link> 
                       
                        </>
                    
                    }

                    

                
            </header>
        
        </>
        
    )



}

export default Header