import {
	createSlice,
	type PayloadAction,
	type Reducer,
} from "@reduxjs/toolkit";

export type FilterType = "all" | "completed" | "incomplete";

interface FilterState {
	status: FilterType;
}

const initialState: FilterState = {
	status: "all",
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setFilter: (state: FilterState, action: PayloadAction<FilterType>) => {
			state.status = action.payload;
		},
	},
});

export const { setFilter } = filterSlice.actions;
export const filterReducer: Reducer<FilterState> = filterSlice.reducer;
