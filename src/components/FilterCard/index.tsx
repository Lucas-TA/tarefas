import * as S from './styles'
export type Props = {
  active?: boolean
  counter: number
  subitle
}
const FilterCard = (props: Props) => (
  <S.Card active={props.active}>
    <S.Counter>3</S.Counter>
    <S.Label>pendentes</S.Label>
  </S.Card>
)
export default FilterCard
