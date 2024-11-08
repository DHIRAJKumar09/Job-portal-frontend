<<<<<<< HEAD
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk('auth/register',async(userData)=>{
    const response = await axios.post('https://job-backend-portal.onrender.com/api/users/register',userData);
    return response.data;
});

export const loginUser = createAsyncThunk('auth/login',async(userData)=>{
    const response  = await axios.post('https://job-backend-portal.onrender.com/api/users/login',userData);
    console.log(response.data);
    const result  = await response.data;
     console.log(result);
    return result;
});

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        token:null,
        loading:false,
        error:null,
        role:null,
    },
    reducers:{
        logout:(state)=>{
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers:(builder)=>{
        builder
            .addCase(registerUser.pending,(state)=>{
                state.loading=true
            })
            .addCase(registerUser.fulfilled,(state,action)=>{
                state.loading=false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.role = action.payload.role;
                localStorage.setItem('token',action.payload.token);
            })
            .addCase(registerUser.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(loginUser.pending,(state)=>{
                state.loading=true;
            })
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.loading=false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.role = action.payload.role;
                localStorage.setItem('token',action.payload.token);
            })
            .addCase(loginUser.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message;
            });

    },
});
export const {logout} = authSlice.actions;
=======
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "https://job-backend-portal.onrender.com/api";

// Register User Thunk
export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
            return response.data;
        } catch (error) {
            // Use rejectWithValue to pass error messages to the slice
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

// Login User Thunk
export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/users/login`, userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

// Auth Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: localStorage.getItem('token') || null,
        loading: false,
        error: null,
        role: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.role = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            // Register User
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.role = action.payload.role;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Login User
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.role = action.payload.role;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
>>>>>>> 15dada6 (Initial commit after reinitializing repository)
export default authSlice.reducer;
