import classNames from "classnames";
import type { Task } from "../types/task.types";

interface Props {
	task: Task;
}

export const TaskItem = ({ task }: Props) => {
	return (
		<li
			className={classNames(
				"p-3 border rounded cursor-pointer flex justify-between items-center",
				{ "bg-green-100": task.completed }
			)}
			onClick={() => {}}>
			<span
				className={classNames({
					"line-through text-gray-500": task.completed,
				})}>
				{task.title}
			</span>
			<span className="text-sm text-gray-400">
				{new Date(task.createdAt).toLocaleDateString()}
			</span>
		</li>
	);
};
