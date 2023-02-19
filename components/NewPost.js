import React, { useState } from 'react'


const NewPost = () => {

  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  


    const newPost = async(event) => {
            event.preventDefault();
      const token = window.localStorage.getItem('token')


        fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
                },                 
  body: JSON.stringify({
    post: {
      title: `${titleInput}`,
      description: `${descriptionInput}`,
      price:`${priceInput}`,
      location: `${locationInput}`,
      willDeliver: true
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}
// newPost();

const handleChangeTitle = (event) => {
  setTitleInput(event.target.value);
}
const handleChangeDescription = (event) => {
  setDescriptionInput(event.target.value);
}
const handleChangePrice = (event) => {
  setPriceInput(event.target.value);
}
const handleChangeLocation = (event) => {
  setLocationInput(event.target.value);
}
 return (
  <>
    <p>New Post</p>
    
<form onSubmit={newPost}>
<input id="reply" type="text" placeholder="Type title here." onChange={handleChangeTitle}></input>
<input id="reply" type="text" placeholder="Type description here." onChange={handleChangeDescription}></input>
<input id="reply" type="text" placeholder="Type price here." onChange={handleChangePrice}></input>
<input id="reply" type="text" placeholder="Type location here." onChange={handleChangeLocation}></input>

<button type='submit'>Send</button>

</form>
</>
 )

}

export default NewPost