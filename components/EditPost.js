import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const token = window.localStorage.getItem('token');
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [locationInput, setLocationInput] = useState('');

    const editPost = async(event) => {
      event.preventDefault();
        fetch(`https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`},        
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
    <p>Edit Post</p>
    
<form onSubmit={editPost}>
<input id="reply" type="text" placeholder="Type title here." onChange={handleChangeTitle}></input>
<button type='submit'>Edit Title</button>
</form>
<form onSubmit={editPost}>
<input id="reply" type="text" placeholder="Type description here." onChange={handleChangeDescription}></input>
<button type='submit'>Edit Description</button>
</form>
<form onSubmit={editPost}>
<input id="reply" type="text" placeholder="Type price here." onChange={handleChangePrice}></input>
<button type='submit'>Edit Price</button>
</form>
<form onSubmit={editPost}>
<input id="reply" type="text" placeholder="Type location here." onChange={handleChangeLocation}></input>

<button type='submit'>Edit Location</button>

</form>
</>
 )

}

export default EditPost