import { useState } from 'react'
import * as S from './styles'
type Props = {
  title: string
  priority: string
  status: string
  description: string
}
const Task = ({ title, priority, status, description }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag>{priority}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.Button>Salvar</S.Button>
            <S.Button onClick={() => setIsEditing(false)}>Cancelar</S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.Button>Remover</S.Button>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
export default Task
