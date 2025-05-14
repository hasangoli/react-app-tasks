import { useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppRedux";
import { deleteTask, toggleTask } from "../taskSlice";
import type { Task } from "../types/task.types";

interface Props {
	task: Task;
}

export const TaskItem = ({ task }: Props) => {
	const dispatch = useAppDispatch();

	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(task.title);

	const handleEdit = () => {};

	return (
		<li className="flex justify-between items-center py-2 border-b">
			<div className="flex items-center gap-2">
				<input
					type="checkbox"
					checked={task.completed}
					onChange={() => dispatch(toggleTask(task.id))}
				/>
				{isEditing ? (
					<input
						type="text"
						value={newTitle}
						onChange={e => setNewTitle(e.target.value)}
						className="border p-1"
						onKeyDown={e => e.key === "Enter" && handleEdit()}
						autoFocus
					/>
				) : (
					<span
						className={`cursor-pointer ${
							task.completed ? "line-through text-gray-400" : ""
						}`}
						onDoubleClick={() => setIsEditing(true)}>
						{task.title}
					</span>
				)}
			</div>
			<button
				onClick={() => dispatch(deleteTask(task.id))}
				className="text-red-500 hover:text-red-700">
				x
			</button>
		</li>
	);
};
