import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Search from './components/Search/Search';
import Restaurant from './components/restaurants/Restaurant';
import Cart from './components/cart/Cart';
import AddRestaurant from './components/SuperAdmin/AddRestaurant';
import AddMenuItem from './components/hotelOwner/AddMenuItem';
import Orders from './components/user/Orders';
import MyOrders from './components/hotelOwner/MyOrders';
import OrderDelivery from './components/deliveryPerson/OrderDelivery';
import PickedOrders from './components/deliveryPerson/PickedOrders';
import DisplayMenu from './components/hotelOwner/DisplayMenu';
import UpdateItem from './components/hotelOwner/UpdateItem';
import DisplayRestaurants from './components/SuperAdmin/DisplayRestaurants';
import UpdateRestaurant from './components/SuperAdmin/UpdateRestaurant';
import ProtectedRoute from './ProtectedRoute';
import Help from './components/help/Help';
import PrivacyPolicy from './components/footer/PrivacyPolicy';
import Faq from './components/footer/Faq';
import Terms from './components/footer/Terms';
import Copyright from './components/footer/Copyright';
import Food from './components/Search/Food';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/search" element={<Search/>}/>
      <Route exact path="/menu/:restaurantId" element={<Restaurant/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route element={<ProtectedRoute/>}>
      <Route exact path="/addRestaurant" element={<AddRestaurant/>}/>
      <Route exact path="/addMenuItem" element={<AddMenuItem/>}/>
      <Route exact path='/orders' element={<Orders/>}/>
      <Route exact path='/restaurantOrders' element={<MyOrders/>}/>
      <Route exact path='/deliveryOrders/:area' element={<OrderDelivery/>}/>
      <Route exact path='/pickedOrders' element={<PickedOrders/>}/>
      <Route exact path='/myMenu' element={<DisplayMenu/>}/>
      <Route exact path='/admin/update/:foodId' element={<UpdateItem/>}/>
      <Route exact path='/superadmin/restaurants' element={<DisplayRestaurants/>}/>
      <Route exact path='/superadmin/updateRestaurant/:restaurantId' element={<UpdateRestaurant/>}/>
      </Route>
      <Route exact path='/help' element={<Help/>}/>
      <Route exact path='/privacy' element={<PrivacyPolicy/>}/>
      <Route exact path='/terms' element={<Terms/>}/>
      <Route exact path='/faq' element={<Faq/>}/>
      <Route exact path='/copyright' element={<Copyright/>}/>
      <Route exact path='/:name' element={<Food/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
