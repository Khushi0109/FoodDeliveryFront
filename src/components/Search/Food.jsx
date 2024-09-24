import { Link, useParams } from "react-router-dom";
import Navbar from "../nav/Navbar"
import Footer from "../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { displaySearch } from "../../User/reducers/SuperAdmin";

const Food=()=>{
    const dispatch=useDispatch();
    const {name}=useParams();
    useEffect(()=>{
        dispatch(displaySearch(name))
    },[])
    const search=useSelector((state)=>state.superadmin.searchData);
    return(
        <div>
        <Navbar/>
        <div className="h-screen z-1">
        <div className="h-20 w-full"></div>
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
export default Food;