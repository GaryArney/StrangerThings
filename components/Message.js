import React from 'react'


const Message = () =>{

    const message = async() => {
  
        fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/63edf01d9620a10015337878/messages', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VkZTNhZjk2MjBhMTAwMTUzMzc4NzIiLCJ1c2VybmFtZSI6IkdhcnkiLCJpYXQiOjE2NzY1MzQ3MDN9.EIWNP1X7vXfXLlW6pvvCCJv6CymG4xfo1VGVuii5qU8'
},
  body: JSON.stringify({
    message: {
      content: "Sorry, was trying to pull messages from the post instead of user, didn't see them piling up until now. @Tredding Automotive demonic possession can be expensive without an extensive warranty. Requires certified technicians, and they know it. That said, it's a good weekend trip vechicle. I'm open to a haunted boat though."
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);

    }
message();

    return(
        <p>Message Sent</p>
    )
}


export default Message

