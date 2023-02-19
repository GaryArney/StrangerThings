import React, { useState } from 'react';



    const Test = () => {
      const [testName, setTestName] = useState([]);
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
          setTestName(result)
          console.log(result,'result!');
        } catch (error) {
          console.error(error);
        }
    }
    test();
    console.log(testName,'testname');
    console.log(testName.data,'testname');
    // console.log(testName.data.user,'testname');
    // console.log(testName.data.user.username,'testname');
    //  console.log(result,'yet another result');
    return(
            <>
        <p>TEST PAGE</p>
       <h3>{testName.error}</h3>
            </>

    )

};


export default Test

//fix profile later