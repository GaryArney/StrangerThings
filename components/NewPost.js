import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NewPost = () => {

  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const navigate = useNavigate();


    const newPost = async(event) => {
            event.preventDefault();
      const token = window.localStorage.getItem('token')


        const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts', {
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
})
  const result = await response.json();

  navigate('/');
}


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
    
<form class='new-post' onSubmit={newPost}>
<input class="title" type="text" placeholder="Type title here." onChange={handleChangeTitle}></input>
<input class="description" type="text" placeholder="Type description here." onChange={handleChangeDescription}></input>
<input class="price" type="text" placeholder="Type price here." onChange={handleChangePrice}></input>
<input class="location" type="text" placeholder="Type location here." onChange={handleChangeLocation}></input>
<button type='submit'>Send</button>

</form>
</>
 )
//classname wasn't working, class works for now. 
}

export default NewPost