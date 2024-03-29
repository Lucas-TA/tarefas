import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles'
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
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''
    if (criterion === 'all') {
      message = `${quantity} tarefa(s) encontrada(s) como: 'Todas' ${complement}`
    } else {
      message = `${quantity} tarefa(s) encontrada(s) como: "${`${value}`}" ${complement}`
    }
    return message
  }
  const tasks = filterTask()
  const message = showFilterResult(tasks.length)
  return (
    <MainContainer>
      <Title as="p">{message}</Title>
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
    </MainContainer>
  )
}
export default TasksList
