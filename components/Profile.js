import React from 'react';



    const Profile = () => {

        const profile = async() =>{
        try {
          const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VkMTM4NDkxNjVjMjAwMTViNTIxYzUiLCJ1c2VybmFtZSI6IkdHR0dHIiwiaWF0IjoxNjc2NTI3MDA2fQ.n98eNV8rne8esQfk1gq0vsoIS7eenVmI_lXEqAbyafo'
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