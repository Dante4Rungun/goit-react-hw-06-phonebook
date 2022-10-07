import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = ""

const filtersSlice = createSlice({
    name: "filters",
    initialState: filterInitialState,
    reducers: {
        setValueFilter(state, action) {
           return action.payload 
        }
    }
})

export const { setValueFilter } = filtersSlice.actions
export const filterReducer = filtersSlice.reducer