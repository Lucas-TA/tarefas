import ButtonAdd from '../../components/ButtonAdd'
import SideBar from '../../containers/SideBar'
import TasksList from '../../containers/TasksList'

const Home = () => (
  <>
    <SideBar showFilters />
    <TasksList />
    <ButtonAdd />
  </>
)
export default Home
