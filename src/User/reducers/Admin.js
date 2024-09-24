import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const addMenuItems=createAsyncThunk("addMenuItems", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/admin/addfooditem",{
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
export const deleteMenuItems=createAsyncThunk("deleteMenuItems", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/admin/deletefooditem",{
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
export const displayMenuItems=createAsyncThunk("displayMenuItems", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/admin/displaymenu",{
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
export const displayMenu=createAsyncThunk("displayMenu", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/admin/getmenu",{
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
export const getFoodById=createAsyncThunk("getFoodById", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/admin/getfoodbyid",{
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
export const updateItem=createAsyncThunk("updateItem", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/admin/updateitem",{
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
export const getUserOrders=createAsyncThunk("getUserOrders", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/admin/getuserorders",{
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
export const orderState=createAsyncThunk("orderState", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/admin/orderstate",{
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
export const orderDenied=createAsyncThunk("orderDenied", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/admin/denyorder",{
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
const adminSlice=createSlice({
    name:"adminSlice",
    initialState:{
        menu:[],
        addItemData:[],
        userOrders:[],
        orderStatus:[],
        denyData:[],
        myMenu:[],
        deleteData:[],
        foodById:[],
        updateData:[],
        isLoading:false,
        error:null

    },
    extraReducers: builder=>{
       builder.addCase(displayMenuItems.pending,(state)=>{
                state.isLoading=true;
         })
         .addCase(displayMenuItems.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.menu=action.payload;
         })
         .addCase(displayMenuItems.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
         })
         .addCase(addMenuItems.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(addMenuItems.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.addItemData=action.payload;
        })
        .addCase(addMenuItems.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(getUserOrders.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getUserOrders.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.userOrders=action.payload;
        })
        .addCase(getUserOrders.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(orderState.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(orderState.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.orderStatus=action.payload;
        })
        .addCase(orderState.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(orderDenied.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(orderDenied.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.denyData=action.payload;
        })
        .addCase(orderDenied.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(displayMenu.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(displayMenu.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.myMenu=action.payload;
        })
        .addCase(displayMenu.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(deleteMenuItems.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(deleteMenuItems.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.deleteData=action.payload;
        })
        .addCase(deleteMenuItems.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(getFoodById.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getFoodById.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.foodById=action.payload;
        })
        .addCase(getFoodById.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(updateItem.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(updateItem.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.updateData=action.payload;
        })
        .addCase(updateItem.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
       
    }
})
export default adminSlice.reducer;