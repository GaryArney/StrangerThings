import React from 'react';
import { useState, useEffect } from 'react';
console.log('profile loaded');
    const Profile = (props) => {
        const [profileInfo, setProfileInfo] = useState([]);

//         useEffect(() => {

//             console.log('useEffect fires');

      
//         const profile = async() =>{
//             try {
//                 const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/me', {
//                 headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VkZTNhZjk2MjBhMTAwMTUzMzc4NzIiLCJ1c2VybmFtZSI6IkdhcnkiLCJpYXQiOjE2NzY1MzQ3MDN9.EIWNP1X7vXfXLlW6pvvCCJv6CymG4xfo1VGVuii5qU8'
//                 },
//             })
       
          
//             const result = await response.json();
//             setProfileInfo(result);
//             } catch (error) {
//           console.error(error);
//         }
//     };
//     profile();

// },[])
 useEffect(() => {
const profile = async() =>{
    const token = window.localStorage.getItem('token')
      try {
          const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/me', {
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`        },
      })
  
    
      const resultPro = await response.json();
      setProfileInfo(resultPro);
      } catch (error) {
    console.error(error);
  }
  };
  profile();
  
  },[])

console.log(props.profileInfo.data, 'array returned?');
// console.log(props.profileInfo.data.username, 'array returned?');
// console.log(profileInfo.data.posts[0].title);

    return (
       <>
       <h2>Profile Page</h2>
           
            {profileInfo.data && (
        <ol>
            {profileInfo.data.posts.map((singlePost, index) => {
                 return (
                    <li id= "list" key={index}>
                        <h2>{singlePost.title}</h2>
                        <h3>{singlePost.author}</h3>
              {profileInfo.data.messages.map((singleMessage, index) => {
                return (
                   <>
                   <div id='post' key={index}>
                        <h3>From: {singleMessage.fromUser.username}</h3>
                        <h4>Post:</h4>
                        <div id='message'>
                            {singleMessage.content}
                        </div>
                        </div>
                    </>
                        
                )
              })}
                    </li>
                 );
             })}
        </ol>
)}
      </>
     );

};


export default Profile

//fix profile later