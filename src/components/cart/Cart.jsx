import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import { CLIENT_ID } from '../../Config'
import "../nav/SidebarLeft.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, createOrder, displayCart, displayCartItems, removeCartItem } from "../../User/reducers/Auth";
import swal from "sweetalert";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Cart=()=>{
    const [show,setShow]=useState(false);
    const [show2,setShow2]=useState(false);
    const [orderID,setOrderID]=useState("")
    const [success, setSuccess] = useState(false);
    const [data,setData]=useState({email:localStorage.getItem("email"),id:localStorage.getItem("restaurantId")});
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        dispatch(displayCart(localStorage.getItem("email")));
    },[])

    useEffect(()=>{
        dispatch(displayCartItems(localStorage.getItem("email")));
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createOrder(data));
    }
    const handleAdd=(itemId)=>{
        dispatch(addCartItem({email:localStorage.getItem("email"),id:itemId}))
        window.location.reload();
    }
    
    const handleRemove=(itemId)=>{
        dispatch(removeCartItem({email:localStorage.getItem("email"),id:itemId}))
        window.location.reload();
    }
    const response=useSelector((state)=>state.register.order);
    const cart=useSelector((state)=>state.register.cartData);
    const items=useSelector((state)=>state.register.cartItemsData);
    const restaurant=cart && cart.restaurant;
    const amount=cart && cart.totalPrice;
    const popup=()=>{
        swal({
            text:"Order Placed Successfully!",
            icon:"success"
        }).then((value)=>{
            navigate("/");
        })
    }
    
    // const createOrder = (data, actions) => {
    //     return actions.order.create({
    //         purchase_units: [
    //             {
    //                 description: "Pomato",
    //                 amount: {
    //                     currency_code: "USD",
    //                     value: {amount},
    //                 },
    //             },
    //         ],
    //     }).then((orderID) => {
    //             setOrderID(orderID);
    //             return orderID;
    //         });
    // };
    // const onApprove = (data, actions) => {
    //     return actions.order.capture().then(function (details) {
    //         const { payer } = details;
    //         setSuccess(true);
    //     });
    // };
    return(
    
        <div>
            {
                show ? <div className="modalBackgroundLeft absolute transition duration-400">
                <div className="modalContainerLeft">
                <button onClick={()=>setShow(false)} type="button" className="mt-10 text-2xl ml-80">X</button>
                {/* <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}> */}
                  <div className="flex w-full">
                  <div className="text-3xl mt-10 ml-4 font-serif">Address</div>
                  </div>
                  <div className="mt-12 ml-4">
                    <form method="POST" className="max-w-md" onSubmit={handleSubmit}>
                    <input type="text" name="addressLine1" maxLength="36" placeholder="Address Line1" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="w-80 h-14 border-2 border-gray-400 focus:outline-none p-4"/>
                    <input type="text" name="addessLine2" maxLength="36" placeholder="Address Line2" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4"/>
                    <input type="text" name="city" maxLength="36" placeholder="City" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4"/>
                    <input type="text" name="state" maxLength="36" placeholder="State" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4"/>
                    <input type="text" name="zipcode" maxLength="36" placeholder="Zipcode" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4"/>
                    {response.success ? <div>{popup()}</div> : <div className="text-red-600">{response.message}</div>}
                    {/* <button className="w-80 bg-[#fc8019] text-white mt-6 p-3" type="button" onClick={()=>setShow2(true)}>Order</button> */}
                    {/* {show2 ? (
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                    />
                ) : null} */}
                    <button className="w-80 bg-[#fc8019] text-white mt-6 p-3" type="submit">Order</button>
                    </form>
                    
                  </div>
                  {/* </PayPalScriptProvider> */}
                </div>
              </div> : <div></div>
            }
            <Navbar/>
            <div className="h-20 w-full"></div>
            {items.length>0 ? 
            <div className="h-max bg-[#e9ecee] w-full flex justify-center py-6">
                {/* <div className="w-7/12 h-64 bg-white mt-16 ml-12 shadow-xl"><h2 className="text-xl font-bold ml-4 mt-10">Address</h2>
                <div className="flex">
                <p className="ml-4 text-gray-500 mr-64">Enter Your Delivery Address.</p>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"/>
                </div>
                <button className="px-4 py-2 border border-[#60b246] ml-4 text-[#60b246]" onClick={()=>setShow(true)}>ADD ADDRESS</button>
                </div> */}
               
                <div className="w-4/12 h-max bg-white ml-16 mt-12 p-6 shadow-xl mr-4">
                    <div className="flex mb-4">
                    <img src={restaurant && restaurant.imageUrl} className="w-16"/>
                    <div className="ml-4 border-b-2 border-black"><p className="text-xl font-bold">{restaurant && restaurant.name}</p><p>{restaurant && restaurant.area}</p></div>
                    </div>
                    <div className="border-b-2 border-black mb-6">
                        {
                            items && items.map((item)=>{
                                return(
                                <div key={item.id} className="flex mb-6">
                                    <div className="mr-4 w-32">{item.food.name}</div>
                                    <div className="ml-4"><button onClick={()=>handleRemove(item.food.id)} className="font-bold text-[#60b246] text-2xl mr-2">-</button>{item.quantity}<button onClick={()=>handleAdd(item.food.id)} className="text-[#60b246] font-bold text-2xl ml-2">+</button></div>
                                    <div className="ml-16">₹{item.price}</div>
                                    <div className="ml-4"><img src={item.food.imageUrl} className="w-12"/></div>
                                </div>
                             ) })
                        }
                    </div>
                    <div className="border-b-2 border-black">
                        <h2>Bill Details</h2>
                        <div className="flex mt-2">
                            <div className="mr-44">Item Total</div>
                            <div className="ml-2">₹{cart && cart.totalPrice}</div>
                        </div>
                        <div className="flex mt-2">
                        <div className="mr-40">Delivery Fee</div>
                            <div className="ml-2">₹49</div>
                            </div>
                            <div className="flex mt-2 w-4/12">
                        <div className="mr-44 w-32">Restaurant charges</div>
                            <div className="">₹13</div>
                            </div>
                    </div>
                    <div className="flex mt-4">
                        <div className="font-bold font-sans mr-48">
                            To PAY
                        </div>
                        <div className="ml-2">
                        ₹{cart && cart.totalPrice+49+13}
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                    <button className="bg-[#fc8019] px-4 py-2 text-white w-44" onClick={()=>setShow(true)}>Continue</button>
                    </div>
                </div>
            </div> :
            <div className="h-screen mt-16">
                <div className="w-full mt-44 text-2xl flex justify-center font-sans font-bold">Your cart is empty</div>
                <div className="flex justify-center mt-2">You can go to home page to view more restaurants</div>
                <div className="w-full flex justify-center mt-4"><Link className="p-2 px-4 bg-[#fc8019] text-white" to="/">SEE RESTAURANTS NEAR YOU</Link></div>
            </div>  }
            <Footer/>
        </div>
    )
}
export default Cart;