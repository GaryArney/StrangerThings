import React from 'react';
import { Link } from 'react-router-dom';
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
                   let post = singlePost._id
                   console.log(singlePost._id);
                 return (
                 
                    <li id= "list" key={index}>
                        
                        <h2>{singlePost.title}</h2>
                        <p>{singlePost.description}</p>
                        <p>{singlePost.messages[1]}</p>
                        <p>{singlePost.price}</p>
                        <h5>Posted by: {singlePost.author.username}</h5>
                        <Link post={post}to='/message'>Send Message</Link>
                    </li>
                 );
             })}
        </ol>
)}
        </>
       


    )

}

export default MainList;