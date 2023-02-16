import React from 'react'


const DeletePost = () => {


    const deletePost = async() => {

        fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/63ede9b09620a10015337877', {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VkZTNhZjk2MjBhMTAwMTUzMzc4NzIiLCJ1c2VybmFtZSI6IkdhcnkiLCJpYXQiOjE2NzY1MzQ3MDN9.EIWNP1X7vXfXLlW6pvvCCJv6CymG4xfo1VGVuii5qU8'
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