import React from 'react'


const DeletePost = () => {


    const deletePost = async() => {

        fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/POSTID', {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VkZTNhZjk2MjBhMTAwMTUzMzc4NzIiLCJ1c2VybmFtZSI6IkdhcnkiLCJpYXQiOjE2NzY1MzQ3MDN9.EIWNP1X7vXfXLlW6pvvCCJv6CymG4xfo1VGVuii5qU8'
                 },
  body: JSON.stringify({
    post: {
      title: "1999 Windstar SE, Possibly Possessed ",
      description: "High miles, decent tires, but runs and drives. Non-smoker. Slight engine knock. Faint, child-like laugh can be heard when driving alone at night. No low ball offers. ",
      price: "WTT for a boat.",
      location: "Wholesale Creepy Junkyard",
      willDeliver: true
    }
  })
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