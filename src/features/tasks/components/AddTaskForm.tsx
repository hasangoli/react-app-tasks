import { useState, type ChangeEvent, type FC } from "react";
import { useAppDispatch } from "../../../hooks/useAppRedux";
import { addTask } from "../taskSlice";

export const AddTaskForm: FC = () => {
	const [title, setTitle] = useState<string>("");
	const dispatch = useAppDispatch();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!title.trim()) return;
		dispatch(addTask({ title }));
		setTitle("");
	};

	return (
		<form onSubmit={handleSubmit} className="mb-4 flex gap-2">
			<input
				type="text"
				value={title}
				onChange={(e: ChangeEvent<HTMLInputElement>): void =>
					setTitle(e.target.value)
				}
				placeholder="Enter a task..."
				className="flex-grow p-2 border rounded"
			/>
			<button
				type="submit"
				className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
				Add
			</button>
		</form>
	);
};
