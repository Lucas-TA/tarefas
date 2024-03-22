import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar Javascript',
      enums.Priority.IMPORTANT,
      enums.Status.PENDING,
      'Praticar exercícios solo',
      1
    ),
    new Task(
      'Estudar TypeScript',
      enums.Priority.NORMAL,
      enums.Status.COMPLETE,
      'Rever aulda 2 do módulo',
      2
    ),
    new Task(
      'Estudar Redux',
      enums.Priority.URGENT,
      enums.Status.PENDING,
      'Praticar estruturação do projeto',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions
export default tasksSlice.reducer
