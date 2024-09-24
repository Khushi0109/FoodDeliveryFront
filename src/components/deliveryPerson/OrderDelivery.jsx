import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliveryState, getDeliveryOrders } from "../../User/reducers/Delivery";
import { useParams } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer";
import { getUser } from "../../User/reducers/Auth";

const OrderDelivery=()=>{
    const dispatch=useDispatch();
    const email=localStorage.getItem("email");
    const {area}=useParams();
    useEffect(()=>{
        dispatch(getDeliveryOrders(area))
    },[])
    useEffect(()=>{
        dispatch(getUser(email));
    },[])
    const orders=useSelector((state)=>state.delivery.deliveryOrders);
    const userData=useSelector((state)=>state.register.userData);
    const handlePick=(orderId)=>{
        dispatch(deliveryState({id:orderId,email:email}));
        window.location.reload();
    }
    return(
        <div className="overflow-x-hidden">
          <Navbar/>
            <div className="h-20 w-full"></div>
            <div className="bg-[#37718e] w-full h-44 p-6">
                <div className="w-64 p-4 ml-20">
                    <div className="text-3xl text-white font-bold">{userData.name}</div>
                    <div className="flex"><p className="text-xl text-white mr-4">{userData.mobileNumber}</p><p className="text-xl text-white">{userData.email}</p></div>
                </div>
            </div>
            <div className="w-full p-4 py-8 ml-16">
                <h2 className="text-2xl font-bold ml-24">Delivery Orders</h2>
                {
                    orders && orders.map((order)=>{
                        return(
                            <div key={order.id} className="border border-gray-400 w-4/6 ml-24 mt-4 p-6">
                                <div className="flex border-b border-gray-300 p-2">
                                    <img src={order.restaurant.imageUrl} className="w-20"/>
                                    <div className="ml-4"><p className="font-bold text-xl">{order.restaurant.name}</p>
                                    <p>{order.restaurant.area}</p>
                                    <p>{order.orderDate[1]}/{order.orderDate[2]}/{order.orderDate[0]}  {order.orderDate[3]}:{order.orderDate[4]}:{order.orderDate[5]}</p>
                                    </div>
                                    <div className="ml-80 w-16 font-bold">{order.orderStatus}</div>
                                </div>
                                <div className="flex mt-2">
                                    {order.orderItems.map((item)=>{
                                        return(
                                        <div key={item.id} className="">
                                            <p className="">{item.food.name} X <span className="mr-3">{item.quantity}</span></p>
                                        </div>)
                                    })}
                                    {/* <p className=" font-bold mr-6">Total Ordered Items : {order.totalItems}</p> */}
                                <p className="font-bold mr-6 ml-48">Total Paid : ₹{order.totalPrice}</p></div>
                                { order.orderStatus==="Accepted" ? <div></div> :
                                <div className="flex mt-2"><button className="text-white px-8 py-2 mr-12 bg-[#fc8019]" onClick={()=>handlePick(order.id)} type="button">Pick</button></div>}
                            </div>
                        )
                    })
                }
            </div>
            <Footer/>  
        </div>
    )
}
export default OrderDelivery;