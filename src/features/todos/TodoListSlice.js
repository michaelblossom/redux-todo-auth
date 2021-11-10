import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const todoListSlice = createSlice({
	name: "todoList",
	initialState: [],

	reducer: {
		addTodo(state, { payload }) {
			state.push(payload);
		},
	},
});

export const { addTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
