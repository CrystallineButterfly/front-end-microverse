import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
    'greeting/fetchGreeting',
    async () => {
        const response = await fetch("http://localhost:3004/api/v1/greeting");
        const greeting = await response.json();
        return greeting;
    }
);

export const greetingSlice = createSlice({
    name: 'greeting',
    initialState: {
        greeting: 'Hello beings of the universe!',
    },
    reducers: {},
    extraReducers: {
        [fetchGreeting.fulfilled]: (state, action) => {
            state.greeting = action.payload.greeting.message;
        },
    },
});

const greetingReducer = greetingSlice.reducer;

export default greetingReducer;
