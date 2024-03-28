import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/tasks'
import filterReducer from './reducers/filter'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
