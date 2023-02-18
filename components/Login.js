import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [showLoginButton, setShowLoginButton] = useState(window.localStorage.getItem('token'));
    const [nameInput, setNameInput] = useState('');
    const [pwdInput, setPwdInput] = useState('');
    const navigate = useNavigate();

    const login = async(event) => {
      event.preventDefault();
      console.log(nameInput, pwdInput, 'inputs');
            try {
              const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    username: `${nameInput}`,
                    password: `${pwdInput}`
                  }
                })
              });
        
              const result = await response.json();
              console.log(result.data.token);
              console.log(result);
              window.localStorage.setItem('token',result.data.token);
           
              navigate('/');
            } catch (error) {
              console.error(error);
            }
       
            props.setLoggedIn(window.localStorage.getItem('token'));
            console.log('login set to token');
          };

    const handleNameChange = (event) => {
      setNameInput(event.target.value)
    }

    const handlePwdChange = (event) => {
      setPwdInput(event.target.value)
    }


    return(
        <>
    {
        props.loggedIn ? <p>USER LOGGED IN</p>: null
    }


    <form onSubmit={login}>
      <input type='text' placeholder='username' onChange={handleNameChange}></input>
      <input type='text' placeholder='password' onChange={handlePwdChange}></input>
     
      {
        showLoginButton ?
        null :
        <>
    <button type='submit'>Log in</button>
    <Link to='/register' onClick={() => setShowLoginButton(false)}>Not Registered?</Link>
        </>
     
      }
    </form>



        {/* <form>

            <input type="text" placeholder="username"></input>
            <input type="text" placeholder="password"></input>
            {
                showLoginButton ? 
                <>
                            <button onClick={login}>Login</button>
                            <button onClick={() => setShowLoginButton(false)}>Not Registered?</button>

                
                </>
                :
                <>
                            <input type="text" placeholder="Confirm Password"></input>
                            <button onClick={confirm}>Register</button>
                            <button onClick={() => setShowLoginButton(true)}>Already Registered?</button>
                </>
            }
        </form> */}
        </>
    )

}

export default Login;