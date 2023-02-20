import React from 'react';         //this is a hot mess. Keeps adding edits to it as well.
import { useState, useEffect } from 'react';

    const Profile = () => {
        const [profileInfo, setProfileInfo] = useState([]);

        useEffect(() => {
            const profile = async() =>{
            const token = window.localStorage.getItem('token')
            try {
                const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/me', {
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`        
                    },
                })
  
                    const resultPro = await response.json();
                    setProfileInfo(resultPro);
                    } catch (error) {
                        console.error(error);
                    }      
            }   ;
        profile();
    },[])

    return (
       <>
       <h2>Profile Page</h2>         
            {profileInfo.data && (
                <ol>
                    {profileInfo.data.posts.map((singlePost, index) => { //couldn't figure out how to add unique keys to stop the error.
                        return (
                                <li id= 'list' key={index}>
                                <h2>{singlePost.title}</h2>
                                <h3>{singlePost.author}</h3>
                    {profileInfo.data.messages.map((singleMessage, index) => {
                        return (
                            <>
                                <div id='post' key={index}>
                                    <h3>From: </h3>
                                    <div>
                                        {singleMessage.fromUser.username}
                                    </div>
                                    <h4>Post:</h4>
                                    <div id='message' key={index}>
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

