import React, { useState, useEffect } from "react";
import { FaTrash, FaTrashAlt } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addTodo } from "./features/todos/TodoListSlice";
import { v4 as uuid } from "uuid";
const App = () => {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);

	const handleSubmit = () => {
		setTodoList([...todoList, { id: uuid(), title: todo }]);
		setTodo("");
	};
	const deleteTodo = (id) => {
		const filteredTodo = todoList.filter((todo) => todo.id != id);

		setTodoList(filteredTodo);
	};
	useEffect(() => {
		console.log(todo);
	}, [todo]);

	const dispatch = useDispatch();
	return (
		<>
			<section className="container">
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
							onClick={() => dispatch(addTodo("hgjhkgjh"))}>
							Submit
						</button>
					</div>
				</section>
				<ul className="todo-list">
					{todoList.map((todo) => {
						return (
							<li className="list" key={todo.id}>
								<div className="todo-item">
									<div>{todo.title}</div>
									<div onClick={() => deleteTodo(todo.id)}>
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
