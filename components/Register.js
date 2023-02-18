import React, { useState }from 'react';



const Register = (props) => {

  const [nameInput, setNameInput] = useState('');
  const [pwdInput, setPwdInput] = useState('');

    const register = async(event) => {
      event.preventDefault();
   

  
    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/register', {
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
      window.localStorage.setItem('Token',result.data.token);
    } catch (error) {
      console.error(error);
    }
  }
    const handleNameChange = (event) => {
      setNameInput(event.target.value)
    }

    const handlePwdChange = (event) => {
      setPwdInput(event.target.value)
    }




    return (
      <>
          <p>Register</p>
      {
          props.loggedIn ? <p>USER LOGGED IN</p>: null
      }
  
  
      <form onSubmit={register}>
        <input type='text' placeholder='username' onChange={handleNameChange}></input>
        <input type='text' placeholder='password' onChange={handlePwdChange}></input>
        <button type='submit'>Register</button>
  
      </form>
  
  </>
    )
  };

  export default Register