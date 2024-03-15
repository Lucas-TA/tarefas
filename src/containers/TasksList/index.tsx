import { title } from 'process'
import Task from '../../components/Tarefa'
import { Container } from './styles'

const tasks = [
  {
    title: 'Estudar TypeScript',
    description: 'Ver aula 3 da EBAC',
    priority: 'importante',
    status: 'pendente'
  },
  {
    title: 'Pagar internet',
    description: 'Baixar fatura no Gmail',
    priority: 'urgente',
    status: 'concluída'
  },
  {
    title: 'Ir para a academia',
    description: 'Fazer treino de pernas',
    priority: 'importante',
    status: 'pendente'
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
