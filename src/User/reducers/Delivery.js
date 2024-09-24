import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDeliveryOrders=createAsyncThunk("getDeliveryOrders", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/api/getdeliveryorders",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
export const deliveryState=createAsyncThunk("deliveryState", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/api/deliverystate",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
export const getPickedOrders=createAsyncThunk("getPickedOrders", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/api/getpickedorders",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
export const delivered=createAsyncThunk("delivered", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/api/delivered",{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
const deliverySlice=createSlice({
    name:"adminSlice",
    initialState:{
        deliveryOrders:[],
        delivery:[],
        picked:[],
        deliveredData:[],
        isLoading:false,
        error:null

    },
    extraReducers: builder=>{
       builder.addCase(getDeliveryOrders.pending,(state)=>{
                state.isLoading=true;
         })
         .addCase(getDeliveryOrders.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.deliveryOrders=action.payload;
         })
         .addCase(getDeliveryOrders.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
         })
         .addCase(deliveryState.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(deliveryState.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.delivery=action.payload;
        })
        .addCase(deliveryState.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(getPickedOrders.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getPickedOrders.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.picked=action.payload;
        })
        .addCase(getPickedOrders.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(delivered.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(delivered.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.deliveredData=action.payload;
        })
        .addCase(delivered.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        
    }
})
export default deliverySlice.reducer;