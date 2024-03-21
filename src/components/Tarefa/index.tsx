import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}
const Task = ({ title, priority, status, description }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.ButtonSave>Salvar</S.ButtonSave>
            <S.ButtonCancelOrRemove onClick={() => setIsEditing(false)}>
              Cancelar
            </S.ButtonCancelOrRemove>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.ButtonCancelOrRemove>Remover</S.ButtonCancelOrRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
export default Task
