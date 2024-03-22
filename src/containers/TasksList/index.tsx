import { useSelector } from 'react-redux'
import Task from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { tasks } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>2 tarefas marcada como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              description={t.description}
              title={t.title}
              priority={t.priority}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default TasksList
