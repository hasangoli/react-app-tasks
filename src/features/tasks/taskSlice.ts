import {
	createSlice,
	type PayloadAction,
	type Reducer,
} from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import type { Task } from "./types/task.types";

interface TaskState {
	tasks: Task[];
}

const initialState: TaskState = {
	tasks: [],
};

const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (
			state: TaskState,
			action: PayloadAction<{ title: string }>
		): void => {
			const newTask: Task = {
				id: uuid(),
				title: action.payload.title,
				completed: false,
				createdAt: new Date().toISOString(),
			};

			state.tasks.push(newTask);
		},
		toggleTask: (state: TaskState, action: PayloadAction<string>): void => {
			const task: Task | undefined = state.tasks.find(
				(t: Task): boolean => t.id === action.payload
			);
			if (task) {
				task.completed = !task.completed;
			}
		},
		deleteTask: (state: TaskState, action: PayloadAction<string>): void => {
			state.tasks = state.tasks.filter(
				(t: Task): boolean => t.id !== action.payload
			);
		},
		editTask: (
			state: TaskState,
			action: PayloadAction<{ id: string; title: string }>
		): void => {
			const task: Task | undefined = state.tasks.find(
				(t: Task): boolean => t.id === action.payload.id
			);
			if (task) task.title = action.payload.title;
		},
	},
});

export const { addTask, toggleTask, deleteTask, editTask } = taskSlice.actions;
export const taskReducer: Reducer<TaskState> = taskSlice.reducer;
