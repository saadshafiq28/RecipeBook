import React from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useSnackbar } from 'notistack'

function AddTask(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [data, setData] = React.useState({
    title: '',
    description: ''
  })

  const onSubmit = (data) => {
    axios
      .post('http://localhost:5000/api/recipes', data)
      .then((res) => {
        enqueueSnackbar('Recipe added successfully', {
          variant: 'success',
        })
        window.location.replace('/recipes')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Header />

      <main>
        <Container maxWidth='sm' sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component='h1' variant='h5'>
                Add Recipe
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box onSubmit={handleSubmit(onSubmit)} component='form' sx={{ mt: 1 }}>
                <TextField
                  label='Title'
                  margin='normal'
                  fullWidth
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                  {...register('title', {
                    required: 'Title field is required.',
                  })}
                  error={Boolean(errors.title)}
                  helperText={errors?.title?.message}
                />
                <TextField
                  label='Description'
                  multiline
                  rows={4}
                  margin='normal'
                  fullWidth
                  onChange={(e) => setData({ ...data, description: e.target.value })}
                  {...register('description', {
                    required: 'Description field is required.',
                  })}
                  error={Boolean(errors.description)}
                  helperText={errors?.description?.message}
                />
                {/*<TextField*/}
                {/*  label='Due Date'*/}
                {/*  type='date'*/}
                {/*  margin='normal'*/}
                {/*  fullWidth*/}
                {/*  defaultValue={new Date().toISOString().substr(0, 10)}*/}
                {/*  onChange={(e) => setData({ ...data, dueDate: e.target.value })}*/}
                {/*  {...register('dueDate', {*/}
                {/*    required: 'Due Date field is required.',*/}
                {/*  })}*/}
                {/*  error={Boolean(errors.dueDate)}*/}
                {/*  helperText={errors?.dueDate?.message}*/}
                {/*/>*/}
                <Button type='submit' variant='contained' color='success' size='large' sx={{ mt: 2, mb: 2 }}>
                  Add Recipe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default AddTask
