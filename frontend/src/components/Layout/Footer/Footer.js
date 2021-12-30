import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
        <Typography variant='h6' align='center' gutterBottom>
          SP19 BSE 120
        </Typography>
        <Typography variant='subtitle1' align='center' color='text.secondary' component='p'>
          Made with love by <a href='mailto:saadshafiq2019@gmail.com'>Saad Shafiq</a>
        </Typography>
        <Typography variant='body2' color='text.secondary' align='center'>
          Copyright © {new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  )
}

export default Footer
