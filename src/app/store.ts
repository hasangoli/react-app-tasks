import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "../features/filter/filterSlice";
import { taskReducer } from "../features/tasks/taskSlice";

export const store = configureStore({
	reducer: {
		tasks: taskReducer,
		filter: filterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
