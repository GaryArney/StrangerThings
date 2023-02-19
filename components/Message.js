import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Message = () =>{

  const { id } = useParams();
        const [messageInput, setMessageInput] = useState('');
        const token = window.localStorage.getItem('token')

        // useEffect (() => {
    const message = async(event) => {
      event.preventDefault();
        fetch(`https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/${id}/messages`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`},
  body: JSON.stringify({
    message: {
      content: `${messageInput}`
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);

    }

  // },[])

    const handleChange = (event) => {
        setMessageInput(event.target.value);
    }


    return (
        <>
                <p>Send Message</p>
        <form onSubmit={message}>
            <input id="reply" type="text" placeholder="Type message here." onChange={handleChange}></input>

            <button type='submit'>Send</button>

        </form>
        </>
    )
}


export default Message

