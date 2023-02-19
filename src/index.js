import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'  //imports from libraries
import Header from '../components/Header.js'
import Login from '../components/Login.js'
import MainList from '../components/MainList.js'
import Profile from '../components/Profile.js'
import Register from '../components/Register.js'
import Test from '../components/Test.js'
import NewPost from '../components/NewPost.js'
import DeletePost from '../components/DeletePost.js'
import EditPost from '../components/EditPost.js'
import Message from '../components/Message.js'
import Expand from '../components/Expand.js';


console.log('step 2');
const App = () => {                 //function to wrap around useeffect
  const [postList, setPostList ] = useState([]);      //creates the empty state array
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem('token')); //if token present, it's true
  const [profileInfo, setProfileInfo] = useState([]);

//   console.log(postList, "postlist");
  useEffect(() => {                                     //wraps around asnyc function to fire only once
    const getPost = async() => {                 //function to fetch from api

        const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts');  //stranger things api, works so far.
        const data = await response.json();                     //set response.json to data

        console.log(data.data.posts[10].title,"Fetched Data");                  //logs results
        setPostList(data);               //populates list with fetched data
      
    }
    
    getPost();               //invokes function
  }, [])                //empty array denotes only fires once, anything inside is watched for changes

  useEffect(() => {




// const profile = async() =>{
//   const token = window.localStorage.getItem('token')
//     try {
//         const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/me', {
//         headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`        },
//     })

  
//     const resultPro = await response.json();
//     setProfileInfo(resultPro);
//     } catch (error) {
//   console.error(error);
// }
// };
// profile();

},[])
//   {console.log(postList,"postList in index");}
    return(
        <>
    <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>

    <Routes>
        
        <Route path='/' element={
            <MainList 
                postList={postList}
                setPostList={setPostList}
                loggedIn={loggedIn}
              />
              }>
        </Route>
        <Route path='/login' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}></Route>
        <Route path='/profile' element={<Profile profileInfo={profileInfo} setProfileInfo={setProfileInfo}/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/newpost' element={<NewPost />}></Route>
        <Route path='/posts/:id' element={<DeletePost />}></Route>
        <Route path='/edit' element={<EditPost />}></Route>
        <Route path='/posts/:id/messages' element={<Message />}></Route>
        <Route path='/test' element={<Test />}></Route>
        {/* <Route path='/posts/:id/messages' element={<Expand postList={postList}/>}></Route> */}
    </Routes>
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