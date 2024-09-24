import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser=createAsyncThunk("registerUser", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/auth/signup",{
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
export const loginUser=createAsyncThunk("loginUser", async(data,{rejectWithValue})=>{
    try{
    const response=await fetch("http://localhost:4900/v1/auth/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
        const result=await response.json();
        console.log(result);
        if(result.success){
        const jwt=result.jwt;
        localStorage.setItem("jwt",jwt);
        localStorage.setItem("success",result.success);
        localStorage.setItem("email",result.email);
        localStorage.setItem("role",result.role);
        }
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
export const getUser=createAsyncThunk("getUser", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/auth/getuser",{
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
export const getOrders=createAsyncThunk("getOrders", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/api/getorderdata",{
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
export const logout=createAsyncThunk("logout",async(args,{rejectWithValue})=>{
    try{
        localStorage.clear();
    }catch(error){
        rejectWithValue(error);
    }
})
export const createCart=createAsyncThunk("createCart", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/api/createCart",{
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
export const addCartItem=createAsyncThunk("addCartItem", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/api/addCartItem",{
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
export const removeCartItem=createAsyncThunk("addCartItem", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/api/removecartitem",{
        method:"DELETE",
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
export const displayCart=createAsyncThunk("displayCart", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/api/displaycart",{
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
export const displayCartItems=createAsyncThunk("displayCartItems", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/api/displaycartitems",{
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
export const createOrder=createAsyncThunk("createOrder", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4900/v1/api/createorder",{
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
const registerSlice=createSlice({
    name:"registerSlice",
    initialState:{
        user:[],
        loginData:[],
        userData:[],
        cart:[],
        cartItems:[],
        cartData:[],
        cartItemsData:[],
        order:[],
        ordersData:[],
        isLoading:false,
        error:null
    },
    extraReducers: builder=>{
       builder.addCase(registerUser.pending,(state)=>{
                state.isLoading=true;
            })
       .addCase(registerUser.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.user=(action.payload);
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.loginData=action.payload;
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(getUser.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.userData=action.payload;
        })
        .addCase(getUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(createCart.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(createCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.cart=action.payload;
        })
        .addCase(createCart.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(addCartItem.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(addCartItem.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.cartItems=action.payload;
        })
        .addCase(addCartItem.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(displayCart.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(displayCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.cartData=action.payload;
        })
        .addCase(displayCart.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(displayCartItems.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(displayCartItems.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.cartItemsData=action.payload;
        })
        .addCase(displayCartItems.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(createOrder.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(createOrder.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.order=action.payload;
        })
        .addCase(createOrder.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(getOrders.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getOrders.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.ordersData=action.payload;
        })
        .addCase(getOrders.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(logout.fulfilled,(state)=>{
            state.loginData=[];
            state.user=[];
            state.userData=[];
            state.cart=[];
            state.cartItems=[];
            state.cartData=[];
            state.cartItemsData=[];
            state.order=[];
        })
    }
})
export default registerSlice.reducer;