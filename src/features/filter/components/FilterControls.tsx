import type { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppRedux";
import { setFilter, type FilterType } from "../filterSlice";

const filters: FilterType[] = ["all", "completed", "incomplete"];

export const FilterControls: FC = () => {
	const dispatch = useAppDispatch();
	const current = useAppSelector(state => state.filter.status);

	return (
		<div className="flex gap-2 mb-4">
			{filters.map(filter => (
				<button
					key={filter}
					onClick={() => dispatch(setFilter(filter))}
					className={`capitalize px-3 py-1 border rounded ${
						current === filter ? "bg-blue-500 text-white" : "bg-gray-100"
					}`}>
					{filter}
				</button>
			))}
		</div>
	);
};
