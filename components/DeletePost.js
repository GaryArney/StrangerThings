import React from 'react'
import { useParams } from 'react-router-dom';

const DeletePost = () => {
  const { id } = useParams();
  const token = window.localStorage.getItem('token')
    const deletePost = async() => {
console.log({id},'curly ID');

        fetch(`https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
                                          },

}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}
deletePost();
 return (
    <p>Delete Post</p>
 )

}

export default DeletePost