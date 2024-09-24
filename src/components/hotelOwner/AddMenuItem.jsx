import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { addMenuItems } from "../../User/reducers/Admin";
import { getUser } from "../../User/reducers/Auth";

const AddMenuItem=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const email=localStorage.getItem("email");
    
    useEffect(()=>{
        dispatch(getUser(email));
    },[])
    const userData=useSelector((state)=>state.register.userData);
    const name= userData && userData.name;
    console.log(name);
    const [data,setData]=useState({});
    const [message,setMessage]=useState("");
    const [message1,setMessage1]=useState("");
    const [valid,setValid]=useState(true);
    const rgExp=/^[a-zA-Z.' ]{1,}$/;
    const handleChange1=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        if(rgExp.test(e.target.value))
            {
              setMessage("")
              setValid(true);
            }
            
            else if(!rgExp.test(e.target.value))
            {
              setMessage("Name contains alphabets only")
              setValid(false);
            }
            else{
              setMessage("");
            }
      }
      const rgExp1=/^[0-9]+$/;
      const handleChange2=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        if(rgExp1.test(e.target.value))
            {
              setMessage1("")
              setValid(true);
            }
            
            else if(!rgExp1.test(e.target.value))
            {
              setMessage1("Price must be numbers only")
              setValid(false);
            }
            else{
              setMessage1("");
            }
      }
    const handleChange=(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
        dispatch(addMenuItems({...data,restaurantName:name}));
    }
    const response=useSelector((state)=>state.admin.addItemData);
    const popup=()=>{
        swal({
            text:"Food Item Added",
            icon:"success"
        })
    }
return(
    <div>
        <Navbar/>
            <div className="h-20 w-full"></div>
            <div className="mt-16 h-screen w-full ">
            <div className="w-6/12 shadow-2xl rounded p-4 mx-auto">
                <h2 className="text-2xl font-bold flex justify-center">ADD MENU FOOD ITEM</h2>
                <form method="POST" onSubmit={handleSubmit} className="justify-center mx-auto mt-4">
                    <div className="flex justify-center">
                    <input type="text" name="name" className="border-2 border-gray-400 w-80 h-12 p-4" placeholder="Name" onChange={handleChange1}/>
                    
                    </div>
                    <p className="text-red-600 text-xs italic flex justify-center">{message}</p>
                    <div className="flex justify-center">
                    {/* <input type="text" name="category" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder="Veg Or Non-Veg" onChange={handleChange}/> */}
                    <select className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-2" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}>
                        <option>Veg</option>
                        <option>Non Veg</option>
                    </select>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" name="price" maxLength="4" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder="Price" onChange={handleChange2}/>
                    
                    </div>
                    <p className="text-red-600 text-xs italic flex justify-center">{message1}</p>
                    <div className="flex justify-center">
                    <input type="text" name="imageUrl" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder="ImageUrl" onChange={handleChange}/>
                    </div>
                    <div className="flex justify-center">
                    <input type="text" value={userData.name} disabled name="restaurantName" className="border-b-2 border-r-2 border-l-2 border-gray-400 w-80 h-12 p-4" placeholder="Restaurant Name"/>
                    </div>
                    <div className="flex justify-center mt-4">
                        {response.success ? <div className="text-green-600">{response.message}</div>:<div className="text-red-600">{response.message}</div>}
                    </div>
                    <div className="flex justify-center mt-4">
                    <button className={`px-36 py-2 text-white bg-[#fc8019] ${!valid ? 'opacity-50 cursor-not-allowed hover:none' : ''} `} type="submit" disabled={!valid}>Submit</button>
                    </div>
                </form>
            </div>
            </div>
            <Footer/>
    </div>
)
}
export default AddMenuItem;