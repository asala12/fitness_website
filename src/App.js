import React from 'react'
import{ Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css'
import ExerciseDetail from './Pages/ExerciseDetail';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackGround from './assets/images/Calisthenic.jpeg.png';



const App = () => {



  return (
    
<Box width="400px" sx={{width:{xl: '1488px'}}} m="auto"
 style={{
        position: 'relative',
        backgroundImage: `url(${BackGround})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width:'100vw'
      }}>
       
       <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(150, 150, 150, 0.9)', 
        }}
      />
       <div
        style={{
          position: 'sticky',
          zIndex: 1, 
          padding: '20px',
         
        }}
      >
 <Navbar />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />}/>

    </Routes>
    <Footer/>
    </div>
</Box>
  )
}

export default App