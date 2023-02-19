import React from 'react';

const Expand = (props) => {

    return (
        <>
        <p>expand</p>
        {props.postList.data && (
        <ol>
            {props.postList.data.posts.map((singlePost, index) => {
                   const post = singlePost._id
                   console.log(singlePost._id);
                 return (
                 
                    <li id= "list" key={index}>
                        
                        <h2>{singlePost.title}</h2>
                        <p>{singlePost.description}</p>
                        <p>{singlePost.messages[1]}</p>
                        <p>{singlePost.price}</p>
                        <h5>Posted by: {singlePost.author.username}</h5>
                        {
                            props.loggedIn ?
                        <Link post={post}to='/expand'>Expand</Link>
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

export default Expand