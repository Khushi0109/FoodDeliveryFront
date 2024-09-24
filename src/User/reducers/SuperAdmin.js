import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const addRestaurant=createAsyncThunk("addRestaurant", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/superAdmin/addRestaurant",{
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
export const displayRestaurant=createAsyncThunk("displayRestaurant", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/superAdmin/displayRestaurant",{
        method:"POST",
        headers:{
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
export const displayDefault=createAsyncThunk("displayDefault", async(args,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/superAdmin/display",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
       
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
export const displaySearch=createAsyncThunk("displaySearch", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/superAdmin/displaysearch",{
        method:"POST",
        headers:{
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
export const displayById=createAsyncThunk("displayById", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/superAdmin/displaybyid",{
        method:"POST",
        headers:{
            
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
export const deleteRestaurant=createAsyncThunk("deleteRestaurant", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/superAdmin/deleterestaurant",{
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
export const updateRestaurant=createAsyncThunk("updateRestaurant", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/superAdmin/updaterestaurant",{
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
const superAdminSlice=createSlice({
    name:"superAdminSlice",
    initialState:{
        restaurants:[],
        searchData:[],
        restaurantsById:[],
        addData:[],
        deleteData:[],
        updateData:[],
        isLoading:false,
        error:null

    },
    extraReducers: builder=>{
       builder.addCase(displayRestaurant.pending,(state)=>{
                state.isLoading=true;
         })
         .addCase(displayRestaurant.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.restaurants=action.payload;
         })
         .addCase(displayRestaurant.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
         })
         .addCase(displayDefault.pending,(state)=>{
            state.isLoading=true;
     })
     .addCase(displayDefault.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.restaurants=action.payload;
     })
     .addCase(displayDefault.rejected,(state,action)=>{
        state.isLoading=false;
        state.error=action.payload;
     })
     .addCase(displaySearch.pending,(state)=>{
        state.isLoading=true;
 })
        .addCase(displaySearch.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.searchData=action.payload;
        })
        .addCase(displaySearch.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(displayById.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(displayById.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.restaurantsById=action.payload;
        })
        .addCase(displayById.rejected,(state,action)=>{
        state.isLoading=false;
        state.error=action.payload;
        })
        .addCase(addRestaurant.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(addRestaurant.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.addData=action.payload;
        })
        .addCase(addRestaurant.rejected,(state,action)=>{
        state.isLoading=false;
        state.error=action.payload;
        })
        .addCase(deleteRestaurant.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(deleteRestaurant.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.deleteData=action.payload;
        })
        .addCase(deleteRestaurant.rejected,(state,action)=>{
        state.isLoading=false;
        state.error=action.payload;
        })
        .addCase(updateRestaurant.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(updateRestaurant.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.updateData=action.payload;
        })
        .addCase(updateRestaurant.rejected,(state,action)=>{
        state.isLoading=false;
        state.error=action.payload;
        })
       
    }
})
export default superAdminSlice.reducer;