import { useSelector } from 'react-redux'
import Task from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )
  const filterTask = () => {
    let filteredTasks = itens
    if (term != undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )
      switch (criterion) {
        case 'priority':
          filteredTasks = filteredTasks.filter(
            (item) => item.priority === value
          )
          break
        case 'status':
          filteredTasks = filteredTasks.filter((item) => item.status === value)
          break
        default:
          break
      }

      return filteredTasks
    } else {
      return itens
    }
  }
  const showFilterResult = (quantity: number) => {
    let message = ''
    const complement = term !== undefined && term.length > 0 ? `e "${term}"` : ''
    }`
    if (criterion === 'all') {
      message = `${quantity} tarefas encontradas como: 'Todas' ${complement}`
    } else {
      message = `${quantity} tarefas encontradas como: ${`${criterion}=${value}`}`
    }
  }
  const tasks = filterTask()
  return (
    <Container>
      <p>
        {tasks.length} tarefas marcada como: &quot;{`${criterion}=${value}`}
        &ldquo; {term !== undefined && term.length > 0 ? `e "${term}"` : ''}
      </p>
      <ul>
        <li>{term}</li>
        <li>{criterion}</li>
        <li>{value}</li>
      </ul>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              description={t.description}
              title={t.title}
              priority={t.priority}
              status={t.status}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default TasksList
