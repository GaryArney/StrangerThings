import React from 'react';



    const Test = () => {
 console.log(window.localStorage.getItem('token'), "should show");
      const token = window.localStorage.getItem('token')
        const test = async() =>{
        try {
          const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/test/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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