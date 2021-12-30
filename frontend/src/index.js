import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

import App from './components/App/App'

ReactDOM.render(
  <SnackbarProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SnackbarProvider>,
  document.getElementById('root'),
)
