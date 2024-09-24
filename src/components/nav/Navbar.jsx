import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import "./SidebarLeft.css";
import "./CenterModal.css"
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, logout, createCart, displayCart, getUser } from "../../User/reducers/Auth";
import {Menu, Transition } from '@headlessui/react'
import { Fragment } from "react";
import { displayRestaurant } from "../../User/reducers/SuperAdmin";
const Navbar=()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [show,setShow]=useState(false);
  const [show2,setShow2]=useState(false);
  const [show3,setShow3]=useState(false);
  const [show4,setShow4]=useState(false);
  const [data,setData]=useState({});
  const [data1,setData1]=useState({});
  const [data4,setData4]=useState({});
  const[data2,setData2]=useState({});
  const [message,setMessage]=useState("");
  const [message1,setMessage1]=useState("");
  const [message2,setMessage2]=useState("");
  const [message3,setMessage3]=useState("");
  const [message4,setMessage4]=useState("");
  const [valid2,setValid2]=useState(true);
  const [valid,setValid]=useState(true);
  const [valid1,setValid1]=useState(true);
  const loginData=useSelector((state)=>state.register.loginData);
  const registerData=useSelector((state)=>state.register.user);
  
  

useEffect(()=>{
  dispatch(displayCart(localStorage.getItem("email")));
},[])
const cart=useSelector((state)=>state.register.cartData);
  const handleShow=()=>{
    setShow(false);
    setShow2(true);
  }

  const handleShow1=()=>{
    setShow2(false);
    setShow(true);
  }

  const rgExp=/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
    if(rgExp.test(e.target.value))
        {
          setMessage("")
          setValid(true);
        }
        
        else if(!rgExp.test(e.target.value))
        {
          setMessage("Email must be like test@example.com")
          setValid(false);
        }
        else{
          setMessage("");
        }
  }
  const regEx2=/^[9876]\d{9}$/
    const handleChange4=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx2.test(e.target.value))
        {
          setMessage1("")
          setValid(true);
         
        }
        
        else if(!regEx2.test(e.target.value))
        {
          setMessage1("Provide a valid Phone Number")
          setValid(false);
        }
        
        else{
          setMessage1("");
        }
    }
    const regEx1=/^[a-zA-Z.' ]{1,}$/;
    const handleChange1=(e)=>{
      setData({ ...data, [e.target.name]: e.target.value });
        if(regEx1.test(e.target.value))
        {
          setMessage2("")
          setValid(true);
         
        }
        
        else if(!regEx1.test(e.target.value))
        {
          setMessage2("Name contains alphabets")
          setValid(false);
        }
        else{
          setMessage2("");
        }
    }
    const handleChange5=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
      setValid1(
          
          /[a-z]/.test(e.target.value) && 
          /[A-Z]/.test(e.target.value) && 
          /[0-9]/.test(e.target.value)  &&
          e.target.value.length >= 8  
        );
        if(/[a-z]/.test(e.target.value) && 
        /[A-Z]/.test(e.target.value) && 
        /[0-9]/.test(e.target.value)  &&
        e.target.value.length >= 8){
          setValid(true);
        }
        else setValid(false);
  }
  
  const handleChange6=(e)=>{
    setData1({...data1,[e.target.name]:e.target.value});
    if(rgExp.test(e.target.value))
        {
          setMessage4("")
          setValid2(true);
        }
        
        else if(!rgExp.test(e.target.value))
        {
          setMessage4("Email must be like test@example.com")
          setValid2(false);
        }
        else{
          setMessage4("");
        }
  }
  
  const handleLogin=(e)=>{
    e.preventDefault();
    console.log(data1);
    dispatch(loginUser(data1));
   
    setTimeout(()=>{
      setShow(false);
      navigate("/");
    },1000)
   //window.location.reload();
  }
  const email=localStorage.getItem("email");
    useEffect(()=>{
        dispatch(getUser(email));
    },[email])
    const userData=useSelector((state)=>state.register.userData);
  const handleRegister=(e)=>{
    e.preventDefault();
    console.log(data);
    dispatch(registerUser(data));
    setTimeout(()=>{
      setShow2(false);
    },1000)
  
  }
  const handleSearch=(e)=>{
    e.preventDefault();
    console.log(data2);
    dispatch(displayRestaurant(data2));
    setShow3(false);
  }
  const handleLogout=()=>{
    dispatch(logout());  
    navigate("/");
}
// const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);
//   const [areaName, setAreaName] = useState('');

//   const getCurrentLocation=()=>{
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLatitude(position.coords.latitude);
//           setLongitude(position.coords.longitude);
//         },
//         (error) => {
//           console.error("Error getting geolocation:", error);
//         }
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//     console.log(latitude);
//     console.log(longitude);
//     if (latitude && longitude) {
//       console.log("hfgd")
//       fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=`)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data)
//           if (data.results && data.results.length > 0) {
//             const area = data.results[0].formatted_address;
//             setAreaName(area);
//           }
//         })
//         .catch(error => {
//           console.error("Error fetching area name:", error);
//         });
//     }
//     console.log(areaName)
//   }

 
return(
  <div className="w-full h-auto bg-white fixed z-50">
      {show2 ? <div className="modalBackground absolute transition duration-400">
        <div className="modalContainer">
        <button onClick={()=>setShow2(false)} type="button" className="mt-10 text-2xl ml-80">X</button>
          <div className="flex w-full">
          <div className="text-3xl mt-10 ml-4 font-serif">Sign up</div>
          <img src="https://cdn2.iconfinder.com/data/icons/food-2-18/48/163-512.png" className="w-12 ml-40 mt-10 rounded-full shadow-xl"/>
          </div>
          <div className="ml-4 flex">
          <p className="">Or</p>
          <button className="text-[#fc8019] ml-2" onClick={handleShow1}>login to your account</button>
          </div>
          <div className="mt-12 ml-4">
            <form method="POST" className="max-w-md" onSubmit={handleRegister}>
            <input type="text" required name="name" maxLength="30" className="w-80 h-14 border-2 border-gray-400 focus:outline-none p-4" placeholder="Name" onChange={handleChange1}/>
            <p className="text-red-600 text-xs italic">{message2}</p>
            <input type="email" required name="email" maxLength="36" className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4" placeholder="Email" onChange={handleChange} />
            <p className="text-red-600 text-xs italic">{message}</p>
            <input type="text" required name="mobileNumber" maxLength="10" className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4" placeholder="Phone Number" onChange={handleChange4}/>
            <p className="text-red-600 text-xs italic">{message1}</p>
            <input type="password" required name="password" maxLength="24" className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4" placeholder="Password" onChange={handleChange5}/>
            {valid1 ? <div className="mt-2">
                    <p className="text-xs text-green-500 italic"> 
         
        </p>
                </div>:<div className="mt-2">
                    <p className="text-xs text-red-500 italic"> 
          Password should be at least 8 characters long and contain lowercase
          letters, uppercase letters, and numbers.
        </p>
                </div>
                }
            <select required name="role" className="w-80 h-14 border-b-2 border-l-2 border-t-2 border-r-2 border-gray-400 focus:outline-none p-4" placeholder="Role" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}>
              <option>
                  User
              </option>
              <option>Delivery Partner</option>
              <option>Restaurant Owner</option>
            </select>
            {registerData && registerData.success ? 
            <p className="text-green-600 ml-16 mt-2">{registerData.message}</p>
            : <p className="text-red-600 ml-16 mt-2">{registerData.message}</p>
            }
            <button className={`w-80 bg-[#fc8019] text-white mt-6 p-3 ${!valid ? 'opacity-50 cursor-not-allowed hover:none' : ''} `} type="submit" disabled={!valid}>Sign up</button>
            <p className="text-xs mt-1">By clicking on create account, I accept the Terms & Conditions & Privacy Policy</p>
            </form>
          </div>
        </div>
      </div> : <div></div>
      }
      {show ? <div className="modalBackground absolute transition duration-400">
        <div className="modalContainer">
        <button onClick={()=>setShow(false)} type="button" className="mt-10 text-2xl ml-80">X</button>
          <div className="flex w-full">
          <div className="text-3xl mt-10 ml-4 font-serif">Login</div>
          <img src="https://cdn2.iconfinder.com/data/icons/food-2-18/48/163-512.png" className="w-12 ml-40 mt-10 rounded-full shadow-xl"/>
          </div>
          <div className="ml-4 flex">
          <p className="">Or</p>
          <button className="text-[#fc8019] ml-2" onClick={handleShow}>create account</button>
          </div>
          <div className="mt-12 ml-4">
            <form method="POST" className="max-w-md" onSubmit={handleLogin}>
            <input type="email" required name="email" maxLength="36" className="w-80 h-14 border-2 border-gray-400 focus:outline-none p-4" placeholder="Email" onChange={handleChange6}/>
            <p className="text-red-600 text-xs italic">{message4}</p>
            <input type="password" required name="password" maxLength="24" className="w-80 h-14 border-b-2 border-l-2 border-r-2 border-gray-400 focus:outline-none p-4" placeholder="Password" onChange={(e)=>{setData1({...data1,[e.target.name]:e.target.value})}}/>
            {loginData && loginData.success ? 
            <p className="text-green-600 ml-24 mt-2">{loginData.message}</p>
            : <p className="text-red-600 ml-24 mt-2">{loginData.message}</p>
            }
            <button className={`w-80 bg-[#fc8019] text-white mt-6 p-3 ${!valid2 ? 'opacity-50 cursor-not-allowed hover:none' : ''} `} type="submit" disabled={!valid2}>Login</button>
            <p className="text-xs mt-1">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
            </form>
          </div>
        </div>
      </div> : <div></div>
      }
      {
        show3 ? <div className="modalBackgroundLeft absolute transition duration-400">
        <div className="modalContainerLeft">
        <button onClick={()=>setShow3(false)} type="button" className="mt-10 text-2xl ml-80">X</button>
          <div className="flex w-full">
          <div className="text-3xl mt-10 ml-4 font-serif">Location</div>
          </div>
          <div className="mt-12 ml-4">
            <form method="POST" className="max-w-md" onSubmit={handleSearch}>
            <input type="text" name="area" maxLength="36" placeholder="Enter Area Name" onChange={(e)=>setData2({...data2,[e.target.name]:e.target.value})} className="w-80 h-14 border shadow-xl border-gray-400 focus:outline-none p-4"/>
            
            <button className="w-80 bg-[#fc8019] text-white mt-6 p-3" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div> : <div></div>
      }
      {
        show4 ? <div className="modalBackgroundCenter absolute transition duration-400">
        <div className="modalContainerCenter">
        <button onClick={()=>setShow4(false)} type="button" className="mt-10 text-2xl ml-80">X</button>
          <div className="flex w-full">
          <div className="text-3xl mt-10 ml-4 font-serif">Location</div>
          </div>
          <div className="mt-12 ml-4">
            
            <input type="text" name="area" maxLength="36" placeholder="Enter Your Area Name" onChange={(e)=>setData4({...data4,[e.target.name]:e.target.value})} className="w-80 h-14 border-2 border-gray-400 focus:outline-none p-4"/>
            
            <Link className="w-80 bg-[#fc8019] text-white mt-6 p-3 flex justify-center" to={`/deliveryOrders/${data4.area}`} >Submit</Link>
          </div>
        </div>
      </div> : <div></div>
      }
      <div className="h-20 w-full p-6 shadow-xl z-50">
        <div className="w-full flex">
            <div  className="hover:text-orange-400">
            <Link className="flex justify-start ml-12 font-bold text-2xl font-sans" to="/">Pomato</Link>
            </div>
            <div className="hover:text-orange-400 ml-32">
              {localStorage.getItem("role")==="Restaurant Owner" ?<div></div> : localStorage.getItem("role")==="Super Admin" ? <div></div>:localStorage.getItem("role")==="Delivery Partner" ? <div></div>:
            <button className="text-lg font-bold flex justify-end mt-1" onClick={()=>setShow3(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
Location</button>}
            </div>
            <div className="ml-80 mr-20  hover:text-orange-400">
            {localStorage.getItem("role")==="Restaurant Owner" ? <Link to="/addMenuItem" className="text-lg font-bold ml-24">Add New</Link> : localStorage.getItem("role")==="Super Admin" ? <Link to="/addRestaurant" className="text-lg font-bold">Add Restaurant</Link> : localStorage.getItem("role")==="Delivery Partner" ? <div></div> : 
            <Link className="text-lg font-bold flex justify-end" to="/search"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-1 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            Search</Link> }
            </div>
            <div className=" hover:text-orange-400">
              {localStorage.getItem("role")==="Restaurant Owner" ? <Link to="/myMenu" className="text-lg font-bold">Menu</Link>:localStorage.getItem("role")==="Super Admin" ? <div></div>:localStorage.getItem("role")==="Delivery Partner" ? <Link className="text-lg font-bold" to="/pickedOrders">Picked Orders</Link>:
            <Link className="text-lg font-bold flex justify-end" to="/help"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-1 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
</svg>
Help</Link>}
            </div>
           <div>
            {localStorage.getItem("role")==="Restaurant Owner" ?  <Link className="text-lg font-bold ml-20 hover:text-orange-400" to="/restaurantOrders">Orders</Link>:localStorage.getItem("role")==="Super Admin" ? <Link className="text-lg font-bold hover:text-orange-400" to="/superadmin/restaurants">Restaurants</Link> :localStorage.getItem("role")==="Delivery Partner" ? <button className="text-lg font-bold ml-20 mr-12 hover:text-orange-400" onClick={()=>setShow4(true)}>Orders</button>  :
            <div className="ml-16  relative">
            <div className=" absolute -top-2 -right-4 px-2 bold text-xs rounded-full bg-orange-400 text-white font-bold">{cart && cart.totalItems}</div>
            <Link className="text-lg font-bold flex justify-end hover:text-orange-400" to="/cart">
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1 mt-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>
Cart</Link>

            </div>}</div>
            <div className="ml-6 hover:text-orange-400">
              {
                localStorage.getItem("jwt") ? 
          <div className="">
            
                <button class="peer px-5  text-black text-lg font-bold hover:text-orange-400 flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8  mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg><p className="text-sm mt-1">{userData.name}</p></button>
              <div class="hidden peer-hover:flex hover:flex
              w-[200px]
              flex-col bg-white drop-shadow-xl border-t-2 border-orange-400">
                {localStorage.getItem("role")==="User" ? 
                <Link className="px-5 py-3 hover:bg-gray-100 text-black hover:font-bold flex justify-center" to="/orders">My Orders</Link> :<div></div>}
                  <button className="px-5 py-3 hover:bg-gray-100 text-black hover:font-bold" onClick={handleLogout}>Logout</button>
              </div>
          </div>
//                 <Menu as="div" className="ml-3 float-right mr-6">
//                 <div>
//                   <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              
//                   <svg className="w-8 h-8 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
// </svg>

//                   </Menu.Button>
//                 </div>
//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-100"
//                   enterFrom="transform opacity-0 scale-95"
//                   enterTo="transform opacity-100 scale-100"
//                   leave="transition ease-in duration-75"
//                   leaveFrom="transform opacity-100 scale-100"
//                   leaveTo="transform opacity-0 scale-95"
//                 >
//                   <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                     <Menu.Item>
                      
//                         <Link
//                           to="/"
//                          onClick={handleLogout}
//                           className= 'block px-4 py-2 text-sm text-gray-700'
//                         >
//                           Logout
//                         </Link>
//                     </Menu.Item> 
//                     {localStorage.getItem("role")!="User" ? localStorage.getItem("role")!="Restaurant Owner" ? localStorage.getItem("role")==="Super Admin" ? <div></div> : <div></div> :<div></div>:
//                     <Menu.Item>
                      
//                       <Link
//                         to="/orders"
//                         className= 'block px-4 py-2 text-sm text-gray-700'
//                       >
//                         My Orders
//                       </Link>
//                   </Menu.Item> }
//                     </Menu.Items>
//            </Transition>
//                </Menu>  
               :  
               <button className="text-lg font-bold flex justify-end ml-8" onClick={()=>setShow(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-1 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              Sign In</button>
              }
           
            </div>
        </div>

    </div>
    </div>
)
}
export default Navbar;