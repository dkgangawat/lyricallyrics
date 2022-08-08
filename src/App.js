import React from 'react';
import './App.css';
import Lyrics from './components/Lyrics';
import Header from "./components/Header.jsx";
import {ContextController} from './components/context';
import Footer from './components/footer';
function App() {
  return (
    <>
    <ContextController>
    <Header/>
    <Lyrics/>
    <Footer/>
    </ContextController>
    </>
    
  );
}

export default App;
