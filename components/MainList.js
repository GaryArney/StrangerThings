import React from 'react';
import { Link } from 'react-router-dom';

console.log('step 1');

const MainList = (props) => {
    // console.log(props.postList.data, "mainList props");  // props.postlist is the correct syntax
    console.log(props.postList.data, "mainlist props");
    const token = window.localStorage.getItem('token')
    return(
 
        <>
            <h4>Main post list area. Data should follow.</h4>

        {props.postList.data && (
        <ol>
            {props.postList.data.posts.map((singlePost, index) => {

                   const post = singlePost._id
                   console.log(post,'post id logged');
                   console.log(singlePost._id, 'single post id logged');
                 return (
                 
                    <li id= "list" key={index}>
                        
                        <h2>{singlePost.title}</h2>
                        <p>{singlePost.description}</p>
                        <p>{singlePost.messages[1]}</p>
                        <p>{singlePost.price}</p>
                        <h5>Posted by: {singlePost.author.username}</h5>
                        {
                            props.loggedIn ?
                            <>
                                <Link to={`/posts/${post}/messages/`}>Message</Link>
                                {
                                    token ?
                                    <>
                                <Link to={`/posts/${post}`}>    Delete Post</Link>
                                <Link to='/edit'>     EditPost</Link>   
                                </>:
                                null
                                }               
                            </>
                        :
                        null
                        }
                    </li>
                 );
             })}
        </ol>
)}
        </>
       


    )

}

export default MainList;