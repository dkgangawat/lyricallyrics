import React from 'react';
import './App.css';
import Tracks from './components/Tracks';
import Header from "./components/Header.jsx";
import {ContextController} from './components/context';
import Footer from './components/footer';
import Lyrics from './components/Lyrics';
function App() {
  return (
    <>
    <ContextController>
    <Header/>
    {/* <Tracks/> */}
    <Lyrics/>
    {/* <Footer/> */}
    </ContextController>
    </>
    
  );
}

export default App;
