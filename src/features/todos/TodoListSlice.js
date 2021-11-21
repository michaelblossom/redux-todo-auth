import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
	name: "todoList",
	initialState: [],

	reducers: {
		addTodo(state, action) {
			state.push(action.payload);
		},
		removeTodo(state, action) {
			state = state.filter(({ id }) => id !== action.payload);
			return state;
		},
	},
});

export const todoArray = (state) => state.todoList;
export const { addTodo, removeTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
