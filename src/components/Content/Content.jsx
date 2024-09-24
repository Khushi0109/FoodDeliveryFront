import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { displayDefault, displaySearch } from "../../User/reducers/SuperAdmin";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Content=()=>{
    const dispatch=useDispatch();
    const [id,setId]=useState();
    useEffect(()=>{
        dispatch(displayDefault());
    },[])
const restaurants=useSelector((state)=>state.superadmin.restaurants)
const userData=useSelector((state)=>state.register.userData);
const handleSearch1=()=>{
  dispatch(displaySearch({name:"Pizza"}));
}
const responsive = {
  superLargeDesktop:{
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 3,
    slidesToSlide: 3 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};
return(
    <div className="flex justify-center overflow-x-hidden py-6">
      {localStorage.getItem("role")==="Restaurant Owner" ? <div className="bg-img1 w-full h-screen bg-no-repeat bg-cover"> </div> : localStorage.getItem("role")==="Super Admin" ? 
      <div className="bg-img1 w-full h-screen bg-no-repeat bg-cover"> </div> : localStorage.getItem("role")==="Delivery Partner" ? <div className="bg-img1 w-full h-screen bg-no-repeat bg-cover"> </div> :
        <div className="w-9/12 mt-12">
         <h2 className="text-2xl font-bold">{userData && userData.name} What's on Your Mind?</h2>
<Carousel responsive={responsive} showDots={true} swipeable={true} draggable={false} arrows={false}>
  <Link to={`/${"Pizza"}`}><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" className="w-44"/></Link>
  <Link to={`/${"Rolls"}`}><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png" className="w-44"/></Link>
  <Link to={`/${"Paratha"}`}><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png" className="w-44"/></Link>
  <Link to={`/${"Burger"}`}><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" className="w-44"/></Link>
  <Link to={`/${"Biryani"}`}><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" className="w-44"/></Link>
  <Link to={`/${"Chinese"}`}><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" className="w-44"/></Link>
  <Link to={`/${"Dosa"}`}><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png" className="w-44"/></Link>
</Carousel>
          {/* <div className="mt-8">
            <h2 className="text-2xl font-bold">What's on Your Mind</h2>
        <Carousel
          responsive={responsive}
          showDots={true}
          
        >
          <div className="card">
            
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" className="w-44"/>
          
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png" className="w-44"/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png" className="w-44"/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png" className="w-44"/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" className="w-44"/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" className="w-44"/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" className="w-44"/>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png" className="w-44"/>
          </div>
          
        </Carousel>
        </div> */}

        <div className="text-black font-bold text-2xl mt-16">Restaurants with online food delivery</div>
        <div className="mt-12 grid grid-cols-1 gap-x-44 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 z-50 mb-12">
            {restaurants && restaurants.map((restaurant)=>{ 
              return(
                  <div key= {restaurant.id} className="h-80  shadow-2xl border-1  transition ease-in duration-500">
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
}
    </div>
)
}
export default Content;