import React from 'react'


const NewPost = () => {


    const newPost = async() => {

        fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VkZTNhZjk2MjBhMTAwMTUzMzc4NzIiLCJ1c2VybmFtZSI6IkdhcnkiLCJpYXQiOjE2NzY1MzQ3MDN9.EIWNP1X7vXfXLlW6pvvCCJv6CymG4xfo1VGVuii5qU8'
                 },
  body: JSON.stringify({
    post: {
      title: "1999 Windstar SE, Possibly Possessed ",
      description: "High miles, slight engine knock but still runs and drives. Tires replaced last year. Power steering needs to be fixed. Faint, child-like laugh can be heard when driving alone at night. No low ball offers. Non-smoker.",
      price:"WWT for a (normal) boat",
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
newPost();
 return (
    <p>New Post</p>
 )

}

// export default NewPost