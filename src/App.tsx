import React from 'react';

import { Provider } from 'react-redux'
import store from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import Home from './pages/Home'
import Cadastre from './pages/Cadastre'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/new',
      element: <Cadastre />
    }
  ])

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  )
}

export default App

