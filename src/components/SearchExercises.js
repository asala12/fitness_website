import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const theme = createTheme({
  palette: {
    primary: {
      main: '#780000',
      contrastText: '#fff',
    },
  },
});
const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch]= useState('');
  const [bodyparts, setBodyParts] = useState([]);

  useEffect (()=>{
   const fetchExercisesData = async ()=>{
    const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
   setBodyParts(['all', ...bodyPartsData]);
  }
  fetchExercisesData();
  }, []
  
  )
  const handelSearch = async () => {
    if(search){
     
         const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/name/${search}?limit=50`, exerciseOptions);
      const SearchedExercises = exercisesData.filter((exercise) => exercise.name?.toLowerCase()?.includes(search)|| 
       exercise.target?.toLowerCase()?.includes(search)
      || exercise.equipment?.toLowerCase()?.includes(search)
      || exercise.bodypart?.toLowerCase()?.includes(search))
   
      setSearch('');
      setExercises(SearchedExercises);
    }
  }
  return (
            <ThemeProvider theme={theme}>

    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" color="#2e2f2f">
      <Typography fontWeight={700} sx={{fontSize:{lg: '44px', xs:'30px' }}} mb='50px' textAlign='center'>
        Explore a world of effective exercises <br/> you must include in your workout routine
      </Typography>
      <Box position="relative" mb="72px">
      <TextField sx={{input: {fontWeight:'700', border:'none', borderRadius:'4 px'},width:{lg:'800px', xs:'350'}, backgroundColor:'white', borderRadius:'4px' }} height="76px" value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder='Search Exercises' type='text' />
      <Button variant='contained' sx={{bgcolor:'#780000', color:'white', textTransform:'none', width:{lg:'175px', xs:'80px'}, fontSize:{lg:'20px', xs:'14px'},height:'56px', position:"absolute", right:'0'}} onClick={handelSearch}>
        Search
        </Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', p:'20px'}}>
       <HorizontalScrollbar data={bodyparts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
        </ThemeProvider>

  )
}

export default SearchExercises