import React from 'react'; //should've added useEffect to this one I think.
import { Link } from 'react-router-dom';

const MainList = (props) => {
    const token = window.localStorage.getItem('token')
    return(
        <>
            <h2>Posts</h2>

            {props.postList.data && (
            <ol>
                {props.postList.data.posts.map((singlePost, index) => {

                   const post = singlePost._id
 
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
                                                        <Link to={`/delete/${post}`}>    Delete Post</Link>
                                                        <Link to={`/edit/${post}`}>     EditPost</Link>   
                                                    </>
                                                    :
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