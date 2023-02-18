import React from 'react';
console.log('step 1');

const MainList = (props) => {
    // console.log(props.postList.data, "mainList props");  // props.postlist is the correct syntax
    console.log(props.postList.data, "mainlist props");
    return(
 
        <>
            <h4>Main post list area. Data should follow.</h4>

        {props.postList.data && (
        <ol>
            {props.postList.data.posts.map((singlePost, index) => {
                 return (
                    <li id= "list" key={index}>
                        <h2>{singlePost.title}</h2>
                        <p>{singlePost.description}</p>
                        <p>{singlePost.messages[1]}</p>
                        <p>{singlePost.price}</p>
                    </li>
                 );
             })}
        </ol>
)}
        </>
       


    )

}

export default MainList;