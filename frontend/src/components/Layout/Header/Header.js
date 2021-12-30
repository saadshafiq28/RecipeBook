import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { CssBaseline } from '@mui/material'

function Header() {
  return (
    <>
      <CssBaseline />

      <AppBar color='success' position='relative'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Recipe Book
          </Typography>
          <Button color='inherit' component={Link} to='/'>
            Home
          </Button>

          {localStorage.getItem('jwt_access_token') ? (
            <>
              <Button color='inherit' component={Link} to='/recipes'>
                Recipe
              </Button>
              <Button color='inherit' component={Link} to='/recipes/add'>
                Add Recipe
              </Button>
              {/*<Button color='inherit' component={Link} to='/tasks/stats'>*/}
              {/*  Task Stats*/}
              {/*</Button>*/}
              <Button
                color='inherit'
                onClick={(e) => {
                  e.preventDefault()
                  localStorage.removeItem('jwt_access_token')
                  window.location.replace('/login')
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color='inherit' component={Link} to='/register'>
                Register
              </Button>
              <Button color='inherit' component={Link} to='/login'>
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
