import React from 'react';
import './App.css';
import Tracks from './components/Tracks';
import Header from "./components/Header.jsx";
import {ContextController} from './components/context';
import Footer from './components/footer';
import Lyrics from './components/Lyrics';
import {Routes,Route} from 'react-router-dom'
import DisplayLyrics from './components/DisplayLyrics';
function App() {
  return (
    <>
    <ContextController>
    <Header/>
    <Routes>
      <Route path="/lyricallyrics" element={<Tracks/>}/>
      <Route path='/lyricallyrics/lyrics/:id' element={<DisplayLyrics/>}/>
    </Routes>
    <Footer/>
    </ContextController>
    </>
    
  );
}

export default App;
