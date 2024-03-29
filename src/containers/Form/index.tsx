import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ButtonSave, MainContainer, Title } from '../../styles'
import { Input } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { register } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      register({
        title,
        priority,
        description,
        status: enums.Status.PENDING
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <S.Form onSubmit={registerTask}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Input
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <S.Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <S.Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </S.Option>
          ))}
        </S.Options>
        <ButtonSave type="submit">Cadastrar</ButtonSave>
      </S.Form>
    </MainContainer>
  )
}
export default Form
