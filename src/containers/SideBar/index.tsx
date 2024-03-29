import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { Button, Input } from '../../styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
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
                legenda="pendentes"
              />
              <FilterCard
                value={enums.Status.COMPLETE}
                criterion="status"
                legenda="concluídas"
              />
              <FilterCard
                value={enums.Priority.URGENT}
                criterion="priority"
                legenda="urgentes"
              />
              <FilterCard
                value={enums.Priority.IMPORTANT}
                criterion="priority"
                legenda="importantes"
              />
              <FilterCard
                value={enums.Priority.NORMAL}
                criterion="priority"
                legenda="normal"
              />
              <FilterCard criterion="all" legenda="todas" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}
export default SideBar
