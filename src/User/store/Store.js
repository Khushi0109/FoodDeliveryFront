import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../reducers/Auth";
import SuperAdminReducer from "../reducers/SuperAdmin";
import AdminReducer from "../reducers/Admin";
import DeliveryReducer from "../reducers/Delivery";

export const Store=configureStore({
    reducer:{
        register:registerReducer,
        superadmin:SuperAdminReducer,
        admin:AdminReducer,
        delivery:DeliveryReducer,
    }
})