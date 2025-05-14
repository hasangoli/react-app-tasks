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
		addTask: (state: TaskState, action: PayloadAction<{ title: string }>) => {
			const newTask: Task = {
				id: uuid(),
				title: action.payload.title,
				completed: false,
				createdAt: new Date().toISOString(),
			};

			state.tasks.push(newTask);
		},
		toggleTask: (state: TaskState, action: PayloadAction<string>) => {
			const task = state.tasks.find((t: Task) => t.id === action.payload);
			if (task) {
				task.completed = !task.completed;
			}
		},
	},
});

export const { addTask, toggleTask } = taskSlice.actions;
export const taskReducer: Reducer<TaskState> = taskSlice.reducer;
