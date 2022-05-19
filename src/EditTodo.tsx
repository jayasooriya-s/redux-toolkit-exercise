import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";

export default function EditTodo() {
  const todoList = useAppSelector((state) => state.todo);
  return <div> Todo list count : {todoList.length}</div>;
}
