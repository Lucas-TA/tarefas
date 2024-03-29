import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tasks from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Tasks[]
}

const initialState: TasksState = {
  itens: [
    {
      id: 1,
      title: 'Estudar JavaScript',
      description: 'Estudar javascript revendo exercicios',
      priority: enums.Priority.NORMAL,
      status: enums.Status.COMPLETE
    },
    {
      id: 2,
      title: 'Estudar Material de Apoio',
      description: 'Estudar javascript revendo exercicios',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDING
    },
    {
      id: 3,
      title: 'Estudar TypeScript',
      description: 'Estudar javascript revendo exercicios',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDING
    }
  ]
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
    register: (state, action: PayloadAction<Tasks>) => {
      const taskExists = state.itens.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )
      if (taskExists) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remove, edit, register } = tasksSlice.actions
export default tasksSlice.reducer
