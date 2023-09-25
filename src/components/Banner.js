import React from 'react'
import {Box,  Typography, Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#780000',
      contrastText: '#fff',
    },
  },
});

const Banner = () => {
  return (
        <ThemeProvider theme={theme}>

    <Box  sx={{mt:{lg: '150px', xs:'70px'}, ml:{sm:'50px'}}} position="relative" p="20px" color="#2e2f2f">
      <Typography color="#780000" fontWeight="600" fontSize="28px" >
        GOLDS GYM
        </Typography>

        <Typography fontWeight="700" sx={{fontSize:{lg:'44px', xs:'40px'}}} mb="23px" mt="30px">
            Excuses Don't Kill The Fat,<br/> Exercises Do
        </Typography> 

        <Typography fontSize="22px" lineHeight="35px" mb={4}>
           Dive Into The Best Exercises
        </Typography>

        <Button variant='contained' color="primary" href="#exercises" sx={{padding:'10px'}}>Let's Dive</Button>        
    
    </Box>
    </ThemeProvider>
  )
}

export default Banner