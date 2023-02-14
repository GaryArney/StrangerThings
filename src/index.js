import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'  //imports from libraries
import Header from '../components/Header.js'
import Login from '../components/Login.js'
import MainList from '../components/MainList.js'

console.log('step 2');
const App = () => {                 //function to wrap around useeffect
  const [postList, setPostList ] = useState([]);      //creates the empty state array
//   console.log(postList, "postlist");
  useEffect(() => {                                     //wraps around asnyc function to fire only once
    const getPost = async() => {                 //function to fetch from api

        const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts');  //stranger things api, works so far.
        const data = await response.json();                     //set response.json to data

        console.log(data.data.posts[1],"Fetched Data");                  //logs results
        setPostList(data.results);               //populates list with fetched data
    }
    
    getPost();               //invokes function
  }, [])                //empty array denotes only fires once, anything inside is watched for changes
//   {console.log(postList,"postList in index");}
    return(
        <>
    <Header />
    <Login />
    <MainList postList={postList} setPostList={setPostList}/>
    <p>Index.js works</p>
        </>
    )
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(        //added <hashrouter around app when importing react hashrouter,routes, and route.
    <HashRouter>
    <App />
    </HashRouter>
    );


///////beginning final project/////////
///added header, mainlist, login component files
//linked header to index, with links