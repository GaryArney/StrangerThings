import React from 'react';


const Register = async() => {
    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: 'Gary',
            password: 'tteesstt'
          }
        })
      });

      const result = await response.json();
      console.log(result.data.token);
      window.localStorage.setItem('Token',result.data.token);
    } catch (error) {
      console.error(error);
    }

    return (
        <p>Register Loaded</p>
    )
  };

  export default Register