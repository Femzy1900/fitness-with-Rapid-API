import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions, fetchData} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercise from '../components/SimilarExercise';

const ExerciseDetail = () => {
  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercise />

    </Box>
  )
}

export default ExerciseDetail
