import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { Input } from '../../styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        <Input
          type="text"
          placeholder="Search"
          value={term}
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
        <S.Filters>
          <FilterCard
            value={enums.Status.PENDING}
            criterion="status"
            legend="pendentes"
          />
          <FilterCard
            value={enums.Status.COMPLETE}
            criterion="status"
            legend="concluídas"
          />
          <FilterCard
            value={enums.Priority.URGENT}
            criterion="priority"
            legend="urgentes"
          />
          <FilterCard
            value={enums.Priority.IMPORTANT}
            criterion="priority"
            legend="importantes"
          />
          <FilterCard
            value={enums.Priority.NORMAL}
            criterion="priority"
            legend="normal"
          />
          <FilterCard criterion="all" legend="todas" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
export default SideBar
