import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <h1>{exercise.WorkOut}</h1>
        <h2>{exercise.Intensity_Level}</h2>

        <Stack direction="row">
            <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                {exercise.target}
            </Button>
        </Stack>

    </Link> 
    
  )
}

export default ExerciseCard