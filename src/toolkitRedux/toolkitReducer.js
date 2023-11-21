import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todos: ["снять видео", "смонтировать видео", "рассказать про toolkit"]
};

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    },
});

export const { increment, decrement } = toolkitSlice.actions;
export default toolkitSlice.reducer;