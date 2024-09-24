import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute=()=>{
    const success=localStorage.getItem("success");
    return (
        success ?  <Outlet/> : <Navigate to="/"/>
         )
}
export default ProtectedRoute;