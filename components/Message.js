import React, { useState } from 'react' //fires twice, forgot to implement useEffect
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Message = () =>{

  const { id } = useParams();
        const [messageInput, setMessageInput] = useState('');
        const token = window.localStorage.getItem('token')
        const navigate = useNavigate();

    const message = async(event) => {
      event.preventDefault();
       const response = await fetch(`https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/${id}/messages`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
          },
  body: JSON.stringify({
    message: {
      content: `${messageInput}`
    }
  })
})
const result = response.json();

    console.log(result);
    navigate('/');
    }

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

