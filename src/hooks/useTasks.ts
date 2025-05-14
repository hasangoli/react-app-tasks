import type { Task } from "../features/tasks/types/task.types";
import { useAppSelector } from "./useAppRedux";

export const useTasks = (): Task[] => {
	const tasks = useAppSelector(state => state.tasks.tasks);
	return tasks;
};
