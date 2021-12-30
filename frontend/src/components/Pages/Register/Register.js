import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useSnackbar } from 'notistack'

import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'

function Register(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [data, setData] = React.useState({
    name: '',
    username: '',
    email: '',
    password: '',
  })

  const onSubmit = (data) => {
    axios
      .post('http://localhost:5000/api/auth/register', data)
      .then((res) => {
        enqueueSnackbar('You successfully registered.', {
          variant: 'success',
        })
        window.location.replace('/register')
      })
      .catch((err) => {
        enqueueSnackbar('Username or Email must be unique.', {
          variant: 'error',
        })
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
                Register
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box onSubmit={handleSubmit(onSubmit)} component='form' sx={{ mt: 1 }}>
                <TextField
                  label='Name'
                  margin='normal'
                  fullWidth
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  {...register('name', {
                    required: 'Name field is required.',
                  })}
                  error={Boolean(errors.name)}
                  helperText={errors?.name?.message}
                />

                <TextField
                  label='Username'
                  margin='normal'
                  fullWidth
                  onChange={(e) => setData({ ...data, username: e.target.value })}
                  {...register('username', {
                    required: 'Username field is required.',
                  })}
                  error={Boolean(errors.username)}
                  helperText={errors?.username?.message}
                />

                <TextField
                  label='Email'
                  type='email'
                  margin='normal'
                  fullWidth
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  {...register('email', {
                    required: 'Email field is required.',
                  })}
                  error={Boolean(errors.email)}
                  helperText={errors?.email?.message}
                />

                <TextField
                  label='Password'
                  type='password'
                  margin='normal'
                  fullWidth
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  {...register('password', {
                    required: 'Password field is required.',
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors?.password?.message}
                />

                <Button type='submit' variant='contained' color='success' size='large' sx={{ mt: 2, mb: 2 }}>
                  Register
                </Button>

                <Grid container justifyContent='flex-end'>
                  <Grid item>
                    <Link to='/login' variant='body2'>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default Register
