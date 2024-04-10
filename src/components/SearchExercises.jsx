
import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
// import HorizontalScrollbar from './HorizontalScrollbar';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {

    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])

    const handleClick = async () => {
        if (search) {
            const exercisesData = await fetchData('https://work-out-api1.p.rapidapi.com/search', exerciseOptions);
    
            console.log(exercisesData);
    
            if (exercisesData) {
                const searchedExercises = exercisesData.filter(
                    (exercise) =>
                        (exercise.WorkOut && exercise.WorkOut.toLowerCase().includes(search)) ||
                        (exercise.Muscles && exercise.Muscles.toLowerCase().includes(search)) ||
                        (exercise.Equipment && exercise.Equipment.toLowerCase().includes(search)) ||
                        (exercise.Intensity_Level && exercise.Intensity_Level.toLowerCase().includes(search))
                );
                
                console.log(searchedExercises)
                setSearch('');
                setExercises(searchedExercises);
            } else {
                // Handle the case when exercisesData is null or undefined
                console.error("Exercises data is null or undefined.");
            }
        }
    };
    
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleClick} >
          Search
        </Button>
      </Box>
      {/* <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar />
      </Box> */}
    </Stack>
  )
}

export default SearchExercises
