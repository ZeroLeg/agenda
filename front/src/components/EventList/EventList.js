import { Grid, Typography } from '@mui/material'
import React from 'react'
import Event from '../Event/Event';
import useEventList from './useEventList'

const EventList = () => {
  const { error, isLoaded, data } = useEventList(`http://localhost:3000/api/events`);
  
  if(!isLoaded ) return ( <p>Loading...</p> )

  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2">Listado de tareas</Typography>
      </Grid>
      

      { 
        data.map((event, i) => {
          
          return (
            <Grid key={i} item>
              <Event event={event} />
            </Grid>
          )
        })
      }

    </Grid>
  )
}

export default EventList