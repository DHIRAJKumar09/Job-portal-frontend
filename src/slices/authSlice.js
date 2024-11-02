import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk('auth/register',async(userData)=>{
    const response = await axios.post('http://localhost:5000/api/users/register',userData);
    return response.data;
});

export const loginUser = createAsyncThunk('auth/login',async(userData)=>{
    const response  = await axios.post('http://localhost:5000/api/users/login',userData);
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
export default authSlice.reducer;