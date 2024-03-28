import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { remove, edit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

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
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
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
            <S.ButtonSave
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
            </S.ButtonSave>
            <S.ButtonCancelOrRemove onClick={cancelEditing}>
              Cancelar
            </S.ButtonCancelOrRemove>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
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
