import React from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import { Box, Container, Typography } from '@mui/material'

function Home() {
  return (
    <>
      <Header />

      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              Daily Tasks
            </Typography>
            <Typography variant='h5' align='center' color='text.secondary' paragraph>
              This app will help you track your daily tasks. You can add tasks, mark them as
              complete, set due date. You can also see your tasks stats.
            </Typography>
          </Container>
        </Box>
      </main>

      <Footer />
    </>
  )
}

export default Home
