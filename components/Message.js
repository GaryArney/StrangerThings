import React, { useState } from 'react'


const Message = () =>{

        const [messageInput, setMessageInput] = useState('');
        const token = window.localStorage.getItem('token')
    const message = async() => {
  
        fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/63edf01d9620a10015337878/messages', {
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


    const handleChange = (event) => {
        setMessageInput(event.target.value);
    }


    return (
        <>
                <p>Message Sent</p>
        <form onSubmit={message}>
            <input id="reply" type="text" placeholder="Type message here." onChange={handleChange}></input>

            <button type='submit'>Send</button>

        </form>
        </>
    )
}


export default Message

