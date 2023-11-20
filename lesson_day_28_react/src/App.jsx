import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageContainer from './ImageContainer'


function App() {


  return (
        <div className="App">
              <h1>Image Gallery</h1>
              <ImageContainer imgSrc="slide-1.jpg" altText="Description 1" containerId="image1"/>
              <ImageContainer imgSrc="slide-2.jpg" altText="Description 1" containerId="image2"/>
              <ImageContainer imgSrc="slide-3.jpg" altText="Description 1" containerId="image3"/>

        </div>
  )
}

export default App
