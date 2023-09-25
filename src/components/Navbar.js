import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logoo from '../assets/images/logoo.png'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap:{ sm:'122px', xs:'40px'}, mt:"0", justifyContent:'none'}} px="20px">
       <Link to="/">
        <img src={logoo} alt="logo" style={{width: '48px', height: '48px', Margin: '0 20px'}}/>
       </Link> 
       <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{textDecoration:'none', color:'#780000', borderBottom:'3px solid #a60000'}}>Home</Link>
        <a href="#exercises" style={{textDecoration:'none', color:'#780000'}}>Exercises</a>
        </Stack>  
    </Stack>
  )
}

export default Navbar