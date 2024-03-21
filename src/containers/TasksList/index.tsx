import Task from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'Estudar TypeScript',
    description: 'Ver aula 3 da EBAC',
    priority: enums.Priority.IMPORTANT,
    status: enums.Status.PENDING
  },
  {
    title: 'Pagar internet',
    description: 'Baixar fatura no Gmail',
    priority: enums.Priority.URGENT,
    status: enums.Status.COMPLETE
  },
  {
    title: 'Ir para a academia',
    description: 'Fazer treino de pernas',
    priority: enums.Priority.URGENT,
    status: enums.Status.PENDING
  }
]

const TasksList = () => (
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
export default TasksList
