import { FilterControls } from "./features/filter/components/FilterControls";
import { AddTaskForm } from "./features/tasks/components/AddTaskForm";
import { TaskList } from "./features/tasks/components/TaskList";

const App = () => {
	return (
		<div className="p-6 max-w-3xl mx-auto">
			<h1 className="text-2xl font-bold mb-4">Task Manager</h1>
			<AddTaskForm />
			<FilterControls />
			<TaskList />
		</div>
	);
};

export default App;
