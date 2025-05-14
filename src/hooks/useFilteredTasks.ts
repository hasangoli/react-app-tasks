import type { Task } from "../features/tasks/types/task.types";
import { useAppSelector } from "./useAppRedux";

export const useFilteredTasks = (): Task[] => {
	const tasks = useAppSelector(state => state.tasks.tasks);
	const filter = useAppSelector(state => state.filter.status);

	if (filter === "completed") {
		return tasks.filter(task => task.completed);
	}

	if (filter === "incomplete") {
		return tasks.filter(task => !task.completed);
	}

	return tasks;
};
