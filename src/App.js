import React, { useState, useEffect } from "react";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import { v4 as uuid } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./features/todos/TodoListSlice";
import { todoArray } from "./features/todos/TodoListSlice";

const App = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector(todoArray);
  return (
    <>
      <section className="container">
        <h1>Todo List</h1>
        <section className="form-div">
          <div>
            <input
              type="text"
              onChange={(e) => setTodo(e.target.value)}
              className="form-control"
              placeholder="Add a task"
              value={todo}
            />
          </div>

          <div>
            <button
              className="btn"
              onClick={() => {
                dispatch(addTodo({ id: uuid(), title: todo }));
                setTodo("");
              }}
            >
              Submit
            </button>
          </div>
        </section>
        <ul className="todo-list">
          {todos &&
            todos.map((todo) => {
              return (
                <li className="list" key={todo.id}>
                  <div className="todo-item">
                    <div>{todo.title}</div>
                    <div onClick={() => dispatch(removeTodo(todo.id))}>
                      <FaTrashAlt color="red" />
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default App;