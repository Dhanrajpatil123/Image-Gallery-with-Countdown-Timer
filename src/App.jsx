import {useEffect, useState } from 'react' 
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ImageGallery from './Component/ImageGallery' 
import CountdownTimer from './Component/CountdownTimer';



function App() { 

  return (
    <>

    <marquee><b>BUMPER OFFER...GET 30% OFF ON EACH PRODUCT</b></marquee>

    <div className="w-full max-w-md">
        <CountdownTimer targetDate="2025-03-19T00:00:00" />
      </div>
       <ImageGallery></ImageGallery>
    </>
  )
}

export default App
