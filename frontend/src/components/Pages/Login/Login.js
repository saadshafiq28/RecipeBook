import React from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Login(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [data, setData] = React.useState({
    email: '',
    password: '',
  })

  const onSubmit = (data) => {
    axios
      .post('http://localhost:5000/api/auth/login', data)
      .then((res) => {
        enqueueSnackbar('You successfully logged in.', {
          variant: 'success',
        })
        localStorage.setItem('jwt_access_token', res.data.token)
        window.location.replace('/recipes')
      })
      .catch((err) => {
        enqueueSnackbar('Your credentials does not match.', {
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
                Login
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box onSubmit={handleSubmit(onSubmit)} component='form' sx={{ mt: 1 }}>
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
                  Login
                </Button>

                <Grid container justifyContent='flex-end'>
                  <Grid item>
                    <Link to='/register' variant='body2'>
                      Don't have an account? Register
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

export default Login
