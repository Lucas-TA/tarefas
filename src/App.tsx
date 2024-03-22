import React from 'react'
import GlobalStyle, { Container } from './styles'
import TasksList from './containers/TasksList'
import SideBar from './containers/SideBar'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TasksList />
      </Container>
    </Provider>
  )
}

export default App
