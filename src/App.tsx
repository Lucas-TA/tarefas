import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/Home'
import Register from './pages/Register'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
