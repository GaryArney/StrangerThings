import React, { useState } from 'react'; //search is super wonky. I would've gone a different route if I could. Can't return links...easily.

    const Search = () =>{
        const [searchInput, setSearchInput] = useState('');
        const [arrayList, setArrayList] = useState([]);
        const [matches, setMatches] = useState([]);   
        
            const search = async(event) =>{
                event.preventDefault();
                const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts');
                const data = await response.json(); 
           
                const title = (data.data.posts.map((singlePost, index) => {
                    arrayList.push(singlePost.title);

            }))
            const filteredList = arrayList.filter(title => title.includes(searchInput));
            setMatches(filteredList);    
        }

            const handleChange = (event) => {
                setSearchInput(event.target.value);
            }           

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
                {
                    matches ?
                <ol>
                    {matches.map((title,index) => (
                        <li key={index}>{title}</li>
                    ))}
                </ol>
                :
                <p>No titles match</p>
                    }
            </form>
            </>
        )
    }

    export default Search