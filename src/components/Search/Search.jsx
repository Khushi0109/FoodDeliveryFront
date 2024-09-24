import { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { displaySearch } from "../../User/reducers/SuperAdmin";
import { Link } from "react-router-dom";

const Search=()=>{
    const [data,setData]=useState({});
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(displaySearch(data));
    }
    const search=useSelector((state)=>state.superadmin.searchData);
    return(
        <div>
            <Navbar/>
            <div className="h-screen z-1">
            <div className="h-20 w-full"></div>
                <div className="w-7/12 mt-16 flex justify-center border-2 border-gray-400 ml-80">
                    <form method="POST" onSubmit={handleSubmit} className="w-9/12 inline">
                    <input type="text" name="name" placeholder="Search for Restaurants and Food" maxLength="36" className="w-7/12 h-12 focus:outline-none p-2" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}/>
                    <button type="submit" className="float-right mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </button>
            </form>
                </div>
                <div className="mt-24 grid grid-cols-1 gap-x-44 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ml-44">
            {search && search.map((restaurant)=>{ 
              return(
                  <div key= {restaurant.id} className="h-80  shadow-xl border-1  transition ease-in duration-500">
                    <div className="rounded-full object-contain">
                    <Link to={`/menu/${restaurant.id}`}>
                      <img
                        src={restaurant.imageUrl}
                        //alt={product.imageAlt}
                        className="object-contain w-full h-48 rounded object-scale-up" 
                      />
                     </Link>
                    </div>
                    <div className="mt-2 flex justify-between ml-2">
                        <h3 className="font-bold">
                           
                            <span aria-hidden="true" className="font-serif" />
                            {restaurant.name}
                            
                        </h3>
                        
                    </div>
                    <p className="text-sm ml-2">{restaurant.cuisine}</p>
                    <p className="text-sm ml-2 mb-2">{restaurant.area}</p>
                  </div>
                  )
            
            })}
          </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Search;