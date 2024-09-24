import { useDispatch, useSelector } from "react-redux";
import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { displayMenuItems } from "../../User/reducers/Admin";
import swal from "sweetalert";
import { addCartItem, createCart, displayCartItems, removeCartItem } from "../../User/reducers/Auth";
import { displayById } from "../../User/reducers/SuperAdmin";

const Restaurant=()=>{

    const [quantity,setQuantity]=useState(0);
    const { restaurantId } = useParams();
    const [itemId,setItemId]=useState();
    const jwt=localStorage.getItem("jwt");
    const [data,setData]=useState({
        email:localStorage.getItem("email"),
        id:""
    })
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(displayMenuItems(restaurantId));
    },[])

    useEffect(()=>{
        dispatch(displayById(restaurantId));
        console.log(data);
    },[])
    useEffect(()=>{
        dispatch(displayCartItems(localStorage.getItem("email")));
    },[])
    const items=useSelector((state)=>state.register.cartItemsData);
    const restaurant=useSelector((state)=>state.superadmin.restaurantsById);
    const foods=useSelector((state)=>state.admin.menu);
    const cartData=useSelector((state)=>state.register.cartItems);
    const navigate=useNavigate();
    const email=localStorage.getItem("email");
    // console.log(foods);
    // console.log(restaurant);
    const handleAdd=async(foodId)=>{
        setItemId(itemId=>(foodId));
        console.log(foodId);
         setData(data=>({...data,id:foodId}));
        if(email==null){
            swal({
                text:"Login to Your Account",
                icon:"warning"
            })
        }
        else{
        await dispatch(createCart({email:email,id:restaurantId}));
        localStorage.setItem("restaurantId",restaurantId);
        //setQuantity(quantity+1);
        dispatch(addCartItem({email:localStorage.getItem("email"),id:foodId}));
        window.location.reload();
        }
    }
    const handleRemove=(foodId)=>{
        setItemId(foodId);
        setData({...data,id:itemId});
        setQuantity(quantity-1);
        dispatch(removeCartItem({email:localStorage.getItem("email"),id:foodId}));
        window.location.reload();
    }
    const popup=()=>{
        swal({
            text:"Item added to Cart",
            icon:"success"
        })
        // .then((value)=>{
        //     navigate("/cart");
        // })
        // setTimeout(()=>{
        //     window.location.reload();
        // },1000)
       
    }
    const popfail=()=>{
        swal({
            text:"failed to add",
            icon:"failure"
        })
    }
return(
    <div className="p-0">
    <Navbar/>
    <div className="h-20 w-full"></div>
    <div className="h-6/6 mt-16">
        <div className="w-7/12 border-b-2 border-gray-400 mt-16 mx-auto">
            <div className="text-2xl font-bold">{restaurant.name}</div>
            <div>{restaurant.cuisine}</div>
            <div className="mb-8">{restaurant.area}</div>
            <div className="font-bold text-2xl font-sans mb-6">Menu</div>
        </div>
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
                    {cartData.success ? <div>{popup()}</div>:<div></div>}
                    <div className="border rounded border-gray-400 bg-white-900 w-24 h-12 p-1 mt-2 mb-4"><button className="font-bold text-3xl text-[#60b246] mr-4 ml-2" onClick={()=>handleRemove(food.id)} type="button">-</button><button className="font-bold  text-[#60b246] text-3xl ml-2" onClick={()=>handleAdd(food.id)} type="button">+</button></div>
                   </div> 
                )
            })}        
        </div>
    </div>
    <Footer/>
    </div>
)
}
export default Restaurant;