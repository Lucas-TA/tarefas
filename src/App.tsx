import React from 'react'
import GlobalStyle, { Container } from './styles'
import TasksList from './containers/TasksList'
import SideBar from './containers/SideBar'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TasksList />
      </Container>
    </>
  )
}

export default App
