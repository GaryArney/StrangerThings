import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DeletePost = () => {
  const { id } = useParams();
  const token = window.localStorage.getItem('token')
  const navigate = useNavigate();
    const deletePost = async() => {


      const response = await fetch(`https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
                 },

})

const result = await response.json()
console.log(result);
navigate('/');
}
deletePost();
 return (
    <p>Post deleted.</p>
 )
}

export default DeletePost