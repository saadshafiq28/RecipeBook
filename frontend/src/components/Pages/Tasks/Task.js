import React, { useEffect } from 'react'
import { Button, Card, CardActions, CardContent, Chip, Grid, Typography } from '@mui/material'
import moment from 'moment'
import axios from 'axios'

function Task(props) {
  return (
    <>
      <Grid item key={props.task._id} xs={12} sm={6} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            {/*<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>*/}
            {/*  {moment(props.task.dueDate).format('MMMM Do YYYY')}*/}
            {/*</Typography>*/}
            <Typography variant='h5' component='div'>
              {props.task.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>

               <Chip
                label={props.task.status}
                color={props.task.status === 'favorite' ? 'success' : 'primary'}
              />

            </Typography>
            <Typography>{props.task.description}</Typography>
          </CardContent>
          <CardActions>

             {props.task.status === 'regular' ? '' :  <Button
               size='small'
               color='primary'
               onClick={(e) => {
                 axios
                   .put('http://localhost:5000/api/recipes/' + props.task._id, {
                     status: 'regular',
                   })
                   .then((res) => {
                     props.updateTasks()
                   })
                   .catch((err) => {
                     console.log(err)
                   })
               }}
             >
               Mark as regular
             </Button>}

            {props.task.status === 'favorite' ? '' :  <Button
              size='small'
              color='success'
              onClick={(e) => {
                axios
                  .put('http://localhost:5000/api/recipes/' + props.task._id, {
                    status: 'favorite',
                  })
                  .then((res) => {
                    props.updateTasks()
                  })
                  .catch((err) => {
                    console.log(err)
                  })
              }}
            >
              Mark as favorite
            </Button>}




            <Button
              size='small'
              color='error'
              onClick={(e) => {
                axios
                  .delete('http://localhost:5000/api/recipes/' + props.task._id)
                  .then((res) => {
                    props.updateTasks()
                  })
                  .catch((err) => {
                    console.log(err)
                  })
              }}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}
export default Task
