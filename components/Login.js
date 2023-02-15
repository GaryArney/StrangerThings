import React from 'react';


const Login = () => {


    const login = async() => {
            try {
              const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    username: 'GGGG',
                    password: 'FFFF'
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
          login();
   

    return(
        <>
        <form>

            <input type="text" placeholder="username"></input>
            <input type="text" placeholder="password"></input>
            <button onClick={login}>Login</button>

        </form>
        </>
    )

}

export default Login;