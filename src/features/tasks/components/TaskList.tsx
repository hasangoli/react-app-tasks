import type { FC } from "react";
import { useFilteredTasks } from "../../../hooks/useFilteredTasks";
import { TaskItem } from "./TaskItem";

export const TaskList: FC = () => {
	const tasks = useFilteredTasks();

	if (tasks.length === 0) {
		return <p className="text-gray-500">No tasks yet!</p>;
	}

	return (
		<ul className="space-y-2">
			{tasks.map(task => (
				<TaskItem key={task.id} task={task} />
			))}
		</ul>
	);
};
