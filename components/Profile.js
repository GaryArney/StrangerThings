import React from 'react';



    const Profile = () => {

        const profile = async() =>{
        try {
          const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VkZTNhZjk2MjBhMTAwMTUzMzc4NzIiLCJ1c2VybmFtZSI6IkdhcnkiLCJpYXQiOjE2NzY1MzQ3MDN9.EIWNP1X7vXfXLlW6pvvCCJv6CymG4xfo1VGVuii5qU8'
            },
            })
       
    
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error(error);
        }
    }
    profile();
     
    return(
            <>
        <p>PROFILE PAGE</p>
        {/* <h3>{result}</h3> */}
            </>

    )

};


export default Profile

//fix profile later