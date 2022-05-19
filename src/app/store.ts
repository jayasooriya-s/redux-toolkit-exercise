import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import { apiSlice } from "../features/dogs/dogs-api-slice";
import todoReducer from "../features/todo/todo-slice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
