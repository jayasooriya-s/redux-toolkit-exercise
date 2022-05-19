import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  title: string;
  isCompleted: Boolean;
}

const initialState: TodoState[] = [];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Add ToDo
    todoAdded(state: TodoState[], action: PayloadAction<string>) {
      state.push({ title: action.payload, isCompleted: false });
    },

    todoCompleted(state: TodoState[], action: PayloadAction<number, string>) {
      state[action.payload].isCompleted = true;
    },
    removeTodo(state: TodoState[], action: PayloadAction<number>) {
      state.splice(action.payload, 1);
    },
  },
});

export const { todoAdded, todoCompleted, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
