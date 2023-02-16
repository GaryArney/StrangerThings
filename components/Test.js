import React from 'react';



    const Test = () => {

        const test = async() =>{
        try {
          const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/test/me', {
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
    test();
     
    return(
            <>
        <p>TEST PAGE</p>
        {/* <h3>{result}</h3> */}
            </>

    )

};


export default Test

//fix profile later