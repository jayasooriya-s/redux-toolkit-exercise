import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  title: string;
  isCompleted: Boolean;
}

const initialState: TodoState[] = getLocalStorage();
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Add ToDo
    todoAdded(state: TodoState[], action: PayloadAction<string>) {
      state.push({ title: action.payload, isCompleted: false });
      saveOnLocal(state);
    },

    todoCompleted(state: TodoState[], action: PayloadAction<number, string>) {
      state[action.payload].isCompleted = true;
      saveOnLocal(state);
    },
    removeTodo(state: TodoState[], action: PayloadAction<number>) {
      state.splice(action.payload, 1);
      saveOnLocal(state);
    },
  },
});

async function saveOnLocal(list: TodoState[]) {
  localStorage.setItem("todoList", JSON.stringify(list));
  await console.log(localStorage.getItem("todoList"));
}

function getLocalStorage(): TodoState[] {
  return JSON.parse(localStorage.getItem("todoList") ?? "[]");
}
export const { todoAdded, todoCompleted, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
