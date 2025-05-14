import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import { useAppDispatch } from "../../../hooks/useAppRedux";
import { deleteTask, editTask, toggleTask } from "../taskSlice";
import type { Task } from "../types/task.types";

interface Props {
	task: Task;
}

export const TaskItem = ({ task }: Props) => {
	const dispatch = useAppDispatch();

	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(task.title);

	const handleEdit = (): void => {
		if (newTitle.trim()) {
			dispatch(editTask({ id: task.id, title: newTitle }));
			setIsEditing(false);
		}
	};

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
						onChange={(e: ChangeEvent<HTMLInputElement>): void =>
							setNewTitle(e.target.value)
						}
						className="border p-1"
						onKeyDown={(e: KeyboardEvent<HTMLInputElement>): false | void =>
							e.key === "Enter" && handleEdit()
						}
						onBlur={handleEdit}
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
