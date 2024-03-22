import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/tasks'

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
