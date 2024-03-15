import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Search" />
      <S.Filters>
        <FilterCard legend="pendentes" counter={1} />
        <FilterCard legend="concluídas" counter={1} />
        <FilterCard legend="urgentes" counter={1} />
        <FilterCard legend="importantes" counter={1} />
        <FilterCard legend="normal" counter={1} />
        <FilterCard legend="todas" counter={1} active />
      </S.Filters>
    </div>
  </S.Aside>
)
export default SideBar
