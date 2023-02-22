import { configureStore, createSlice, } from "@reduxjs/toolkit"

const todoslice = createSlice({
    name: "todo",
    initialState: { list: [] },
    reducers: {
        settask: (state, action)=>{
            state.list = [...state.list, action.payload];
        },
        deletetask: (state, action)=>{
            state.list.splice(action.payload,1);
        }
    }
});

export const todoAction = todoslice.actions;

const store = configureStore({
    reducer: { todo:todoslice.reducer }
});

export default store;