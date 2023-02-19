import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const Expand = (props) => {
    const { id } = useParams();
    const [postId, setpostId] = useState('');
    console.log(id,'just id');
    console.log({id}, 'id with curlies')

   useEffect (() => {
        const viewSinglePost = async() => {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/${id}/messages`);
        const data = await response.json();
        console.log(data,'just data');
        setpostId(data);
    }
viewSinglePost();
console.log({id},'second ID with curlies');
   },[])
   console.log(postId.data,'postID');
    return (
        <>
        <p>expand {postId.id}</p>
        {/* {postList.data && (
        <ol>
            {postList.data.posts.map((singlePost, index) => {
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
)} */}
</>
    )
}

export default Expand