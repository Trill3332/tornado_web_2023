import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {

      return (
            <div className='App'>
                  <Header />
                  <Navbar />
                  <div className="container">
                        <Sidebar />
                        <MainContent />
                  </div>
                  <Footer />
            </div>
      )
}


export default App;
