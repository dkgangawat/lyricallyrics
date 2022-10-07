import React from 'react';
import './App.css';
import Tracks from './components/Tracks';
import Header from "./components/Header.jsx";
import {ContextController} from './components/context';
import Footer from './components/footer';
import {Routes,Route} from 'react-router-dom'
import DisplayLyrics from './components/DisplayLyrics';
import Error from './components/404';
import Search_Result from './components/Search_Result';
function App() {
  return (
    <>
    <ContextController>
    <Header/>
    <Routes>
      <Route exact path="/lyricallyrics" element={<Tracks/>}/>
      <Route path='/lyricallyrics/lyrics/:id' element={<DisplayLyrics/>}/>
      <Route path="/lyricallyrics/search" element ={<Search_Result/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/lyricallyrics/error" element={<Error/>}/>
      
    </Routes>
    <Footer/>
    </ContextController>
    </>
    
  );
}

export default App;
