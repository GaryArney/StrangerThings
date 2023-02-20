import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


    const Search = () =>{
        const [searchInput, setSearchInput] = useState('');
        const [arrayList, setArrayList] = useState([]);
        const [matches, setMatches] = useState([]);   
        const [filteredList, setFilteredList] = useState([]);     
        
            const search = async(event) =>{
                event.preventDefault();
                const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts');
                const data = await response.json(); 
    
         
                const title = (data.data.posts.map((singlePost, index) => {
                //   const title = singlePost.title;
                    arrayList.push(singlePost.title);

            }))
            const filteredList = arrayList.filter(title => title.includes(searchInput));
            setMatches(filteredList);
            console.log(arrayList, 'just arrayList');

         
        }
console.log(matches,'any matches?');

            const handleChange = (event) => {
                setSearchInput(event.target.value);
            }
           
  


console.log(filteredList,'list should return something');
        return(
            <>
            <p>Search page</p>
            <form onSubmit={search}>
                <input type="text"
                       placeholder="Type seach here."
                       onChange={handleChange}
                       >
                       </input>
                <button type='submit'>Search</button>
                <ol>
                    {matches.map((title,index) => (
                        <li key={index}>{title}</li>
                    ))}
                </ol>
            </form>
            </>
        )
    }

    export default Search