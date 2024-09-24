import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import { useEffect } from "react";
import { deleteRestaurant, displayDefault } from "../../User/reducers/SuperAdmin";
import { Link } from "react-router-dom";

const DisplayRestaurants=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(displayDefault());
    },[])
    const restaurants=useSelector((state)=>state.superadmin.restaurants);
    const handleDelete=(restaurantId)=>{
        dispatch(deleteRestaurant(restaurantId));
        window.location.reload();
    }
return(
        <div className="overflow-x-hidden">
            <Navbar/>
            <div className="h-20 w-full"></div>
            <div className="mt-12 grid grid-cols-1 gap-x-44 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 z-50 w-10/12 mx-auto mb-20">
            {restaurants && restaurants.map((restaurant)=>{ 
              return(
                  <div key= {restaurant.id} className="h-80  shadow-xl border-1  transition ease-in duration-500">
                    <div className="rounded-full object-contain">
                    
                      <img
                        src={restaurant.imageUrl}
                        //alt={product.imageAlt}
                        className="object-contain w-full h-48 rounded object-scale-up" 
                      />
                     
                    </div>
                    <div className="mt-2 flex justify-between ml-2">
                        <h3 className="font-bold">
                           
                            <span aria-hidden="true" className="font-serif" />
                            {restaurant.name}
                            
                        </h3>
                        
                    </div>
                    <p className="text-sm ml-2">{restaurant.cuisine}</p>
                    <p className="text-sm ml-2 mb-2">{restaurant.area}</p>
                    <div className="flex">
                    <button className="text-white bg-[#fc8019] px-4 py-2" onClick={()=>handleDelete(restaurant.id)} type="button">Delete</button>
                    <Link className="text-white bg-[#fc8019] px-4 py-2 ml-12" to={`/superadmin/updateRestaurant/${restaurant.id}`}>Update</Link>
                    </div>
                  </div>
                  )
            
            })}
          </div>
            <Footer/>
    </div>
)
}
export default DisplayRestaurants;