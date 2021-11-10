import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todos/TodoListSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todos: todoReducer,
	},
});
