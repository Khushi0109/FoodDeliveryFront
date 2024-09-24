import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import { useEffect } from "react";
import { deleteMenuItems, displayMenu } from "../../User/reducers/Admin";
import { Link } from "react-router-dom";

const DisplayMenu=()=>{
    const dispatch=useDispatch();
    const email=localStorage.getItem("email");
    useEffect(()=>{
        dispatch(displayMenu(email));
    },[])
    const handleRemove=(foodId)=>{
        dispatch(deleteMenuItems(foodId));
        window.location.reload();
    }
    const foods=useSelector((state)=>state.admin.myMenu);
    return(
        <div className="overflow-x-hidden">
            <Navbar/>
            <div className="h-20 w-full"></div>
            <div className="w-full ml-16">
            <div className="mt-6 w-7/12 mx-auto">
            {foods && foods.map((food)=>{
                return(
                    <div className=" border-b-2 border-gray-400">
                    <div key={food.id} className="mb-4">
                        <div className="flex flex-row">
                        <div className="mt-8 w-44">{food.category=="Veg" ? <img src="https://th.bing.com/th/id/OIP.ykGTylT_JhcI7Mn6kB-nIgHaFE?rs=1&pid=ImgDetMain" className="w-8"/> :<img src="https://packagingguruji.com/wp-content/uploads/2022/09/New-Non-Logo.png" className="w-8"/>}<h2>{food.name}</h2><p>₹{food.price}</p></div>
                        <div className="mt-4">
                        <img src={food.imageUrl} className="ml-96 w-32 rounded" height="100"/></div>
                        </div>
                    </div>
                    <div className="flex mt-2 mb-4"><button className="text-white bg-[#fc8019] mr-4 ml-2 px-4 py-2" onClick={()=>handleRemove(food.id)} type="button">Delete</button><Link className="text-white bg-[#fc8019] ml-2 px-4 py-2" to={`/admin/update/${food.id}`}>Update</Link></div>
                   </div> 
                )
            })}        
        </div>
            </div>
            <Footer/>
        </div>
    )
}
export default DisplayMenu;