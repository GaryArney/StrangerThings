import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    
    const logOut = () => {
        window.localStorage.removeItem('token');
        props.setLoggedIn(false);
        console.log('login set to false');
    }
console.log(props.loggedIn,'logged in?');
    return (
        <>
            <header>
            <Link to='/'>Main List</Link>                                                                  
            <Link to='/newpost'>   New Post</Link>
            <Link to='/delete'>    Delete Post</Link>
            <Link to='/edit'>     EditPost</Link>                   
            <Link to='/test'      >Test</Link>                 
                    {
                        props.loggedIn ?      
                        
                        <>
                       
                        <Link to='/profile'>    Profile</Link>
                        <Link to='/newpost'>  New Post</Link>
                        <Link to='/login' onClick={logOut}>Logout</Link>
                        
                        </>
                        :
                        <Link to='/login'>Log in</Link>    
                        
                    
                    }

                    

                
            </header>
        
        </>
        
    )



}

export default Header