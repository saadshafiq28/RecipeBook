import React, { useEffect } from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import Task from './Task'
import { Container, Grid, Typography } from '@mui/material'
import axios from 'axios'

function Tasks() {
  const [tasks, setTasks] = React.useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/recipes')
      .then((res) => {
        setTasks(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const updateTasks = () => {
    axios
      .get('http://localhost:5000/api/recipes')
      .then((res) => {
        setTasks(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Header />

      <main>
        <Container sx={{ py: 8 }} maxWidth='md'>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography component='h1' variant='h5'>
                Recipes
              </Typography>
            </Grid>

            {tasks.map((task) => (
              <Task task={task} updateTasks={updateTasks} />
            ))}
          </Grid>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default Tasks
