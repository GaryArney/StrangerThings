import React, { useState } from 'react';


const Login = (props) => {

    const [showLoginButton, setShowLoginButton] = useState(true);

    const login = async() => {
            try {
              const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    username: 'GGGGG',
                    password: 'FFFFF'
                  }
                })
              });
        
              const result = await response.json();
              console.log(result.data.token);
              window.localStorage.setItem('token',result.data.token);
            } catch (error) {
              console.error(error);
            }

          };
        
   

    return(
        <>
    {
        props.loggedIn ? <p>USER LOGGED IN</p>: null
    }
        <form>

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
                            <button>Register</button>
                            <button onClick={() => setShowLoginButton(true)}>Already Registered?</button>
                </>
            }
        </form>
        </>
    )

}

export default Login;