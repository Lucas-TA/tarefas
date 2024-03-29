import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tasks from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Tasks[]
}

const initialState: TasksState = {
  itens: []
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((task) => task.id !== action.payload)
    },
    edit: (state, action: PayloadAction<Tasks>) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)
      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Tasks, 'id'>>) => {
      const taskExists = state.itens.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )
      if (taskExists) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const lastTask = state.itens[state.itens.length - 1]
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)
      if (taskIndex >= 0) {
        state.itens[taskIndex].status = action.payload.finished
          ? enums.Status.COMPLETE
          : enums.Status.PENDING
      }
    }
  }
})

export const { remove, edit, register, changeStatus } = tasksSlice.actions
export default tasksSlice.reducer
