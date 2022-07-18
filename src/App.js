import './App.css';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route  } from 'react-router-dom';
import PostDeteils from './pages/PostDetails';
// import PostDeteils from './pages/PostDeteils';
import Home from './pages/Home';
import React from 'react';
import axios from 'axios';
import { useEffect} from 'react';
import {useDispatch,  useSelector } from "react-redux"
import getPosts from "./actions/posts.actions"
import {useContext ,useState } from 'react'
import {NameContext} from "./TheConText"

function App() {

  const {theme} = useContext(NameContext)

  const dispatch = useDispatch();

  const [search , setSearsh] = useState("")

  const posts = useSelector(state => state.posts)

  useEffect(()=>{
    const api = axios.create({baseURL :"https://api.tawwr.com/"})
    api.get("posts").then(response => dispatch(getPosts(response.data.data)));
    // posts.filter(ele => dispatch(ele === search))
  },[posts]);
  
  return (

    <div className="App" style={theme}>
      <Navbar setSearsh={setSearsh}/>
      <Routes >
        <Route path='/' element={<Home  search={search}/>}></Route>
        <Route path='/postDetails/:id' element={<PostDeteils  />}>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
