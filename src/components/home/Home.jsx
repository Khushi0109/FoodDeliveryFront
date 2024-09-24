import Content from "../Content/Content";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";

const Home=()=>{
    return(
    <div className="w-full h-screen">
        <Navbar/>
        <div className="h-20 w-full"></div>
        <Content/>
        <Footer/>
    </div>
    )
}
export default Home;