import { createSlice } from "@reduxjs/toolkit";
import images from '../../data';
const length = images.length;

const initialState = {
    current: 0,
}

export const slideSlicer = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        next: (state) => {
            state.current = (state.current === length - 1 ? 0 : state.current + 1);
        },
        previous: (state) => {
            state.current = (state.current === 0 ? length - 1 : state.current - 1);
        },
        click: (state, actions) => {
            state.current = actions.payload;
        }
    }
});

export const { next, previous, click } = slideSlicer.actions;
export default slideSlicer.reducer;