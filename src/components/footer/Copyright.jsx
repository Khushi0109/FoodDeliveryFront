import Navbar from "../nav/Navbar";
import Footer from "./Footer";

const Copyright=()=>{
    
    return(
        <div className="overflow-x-hidden">
        <Navbar/>
        <div className="h-20 w-full"></div>
        <div className="w-full h-screen mt-12">
        <div className="flex justify-center text-2xl font-bold">
        Copyright
        </div>
        <h2 className="text-2xl font-bold font-sans">The contents of this website may not be reproduced partially or fully, without due permission from MEA. If referred to as a part of another publication, the source must be appropriately acknowledged. The contents of this website cannot be used in any misleading or objectionable context.</h2>
        </div>
        <Footer/>
        </div>
    )
}
export default Copyright;