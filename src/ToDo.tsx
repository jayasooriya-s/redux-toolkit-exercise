import React, { useState } from "react";
import "./ToDo.css";
import {
  todoAdded,
  todoCompleted,
  removeTodo,
} from "./features/todo/todo-slice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import EditTodo from "./EditTodo";
export default function ToDo() {
  const [todo, setTodo] = useState<string>("");
  const todoList = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(todoAdded(todo));
  }
  function completeTodo(index: number) {
    dispatch(todoCompleted(index));
  }

  function _removeTodo(index: number) {
    dispatch(removeTodo(index));
  }

  return (
    <div className="container">
      <h1> To Do Using Redux Toolkit</h1>
      <h1>
        <EditTodo />
      </h1>
      <div>
        <input
          className="input"
          type="text"
          onChange={(_todo) => {
            setTodo(_todo.target.value);
          }}
        />
        <button className="button" onClick={() => handleClick()}>
          Add
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo, index) => (
            <tr key={index}>
              <td>
                <span>
                  <button onClick={() => _removeTodo(index)}>Remove</button>
                  <span onClick={() => completeTodo(index)}>{todo.title}</span>
                </span>
              </td>
              <td>{todo.isCompleted ? "True" : "False"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
