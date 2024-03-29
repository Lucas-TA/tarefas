import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'
export type Props = {
  legenda: string
  criterion: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}
const FilterCard = ({ legenda, criterion, value }: Props) => {
  const dispatch = useDispatch()

  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const verifyIsActive = () => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriterion && sameValue
  }
  const countingTasks = () => {
    switch (criterion) {
      case 'all':
        return tasks.itens.length
        break
      case 'priority':
        return tasks.itens.filter((item) => item.priority === value).length
        break
      case 'status':
        return tasks.itens.filter((item) => item.status === value).length
        break
      default:
        break
    }
  }
  const filtering = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }
  const counter = countingTasks()
  const active = verifyIsActive()
  return (
    <S.Card active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}
export default FilterCard
