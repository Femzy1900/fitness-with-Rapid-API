import React from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <div>
        <Box>
            <HeroBanner />
            <SearchExercises/>
            <Exercises/>
        </Box>
    </div>
  )
}

export default Home
