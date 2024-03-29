import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Task'

import { remove, edit, changeStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { Button, ButtonSave } from '../../styles'

type Props = TaskClass

const Task = ({
  title,
  priority,
  status,
  description: descriptionOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (descriptionOriginal.length > 0) {
      setDescription(descriptionOriginal)
    }
  }, [descriptionOriginal])

  function cancelEditing() {
    setIsEditing(false)
    setDescription(descriptionOriginal)
  }

  function changeStatusTask(e: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({ id, finished: e.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.COMPLETE}
          onChange={changeStatusTask}
        />
        <S.Title>
          {isEditing ? <em>Editando: </em> : ''}
          {title}
        </S.Title>
      </label>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  edit({
                    id,
                    title,
                    description,
                    priority,
                    status
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </ButtonSave>
            <S.ButtonCancelOrRemove onClick={cancelEditing}>
              Cancelar
            </S.ButtonCancelOrRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.ButtonCancelOrRemove onClick={() => dispatch(remove(id))}>
              Remover
            </S.ButtonCancelOrRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
export default Task
