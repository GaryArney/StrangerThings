import React, { useState } from 'react';
console.log('step 1');

const MainList = (props) => {
    // console.log(props.postList.data, "mainList props");  // props.postlist is the correct syntax
    console.log(props.postList, "mainlest props");
    return(
 
        <>
            <h4>Main post list area. Data should follow.</h4>

            {/* <ol>
                {
            props.postList.data.map((singlePost, index) => {
                return <li key={index}>{singlePost}</li>       
            })
        }
            </ol> */}
        </>
       


    )

}

export default MainList;