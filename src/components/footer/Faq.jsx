import Navbar from "../nav/Navbar";
import Footer from "./Footer"

const Faq=()=>{
    return(
        <div className="overflow-x-hidden">
        <Navbar/>
        <div className="h-20 w-full"></div>
        <div className="w-full h-screen mt-12">
        <div className="flex justify-center text-2xl font-bold">
        FAQs
        </div>
        <div className="mt-4 text-lg ml-8">What is Pomato Customer care number?</div>
        <div className="mt-2 ml-8">We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. </div>
        <div className="mt-4 text-lg ml-8">Can i edit my order?</div>
        <div className="mt-2 ml-8">In order to edit your order, please click on "Help" and then "I wantto modify items in my order". We will connect you to a support agent who will assist you with the same. Please note that your order can be edited only if the restaurant is yet to confirm your order. Post that, we may not be able to modify your order if food preparation has started.</div>
        <div className="mt-4 text-lg ml-8">I want to cancel my order?</div>
        <div className="mt-2 ml-8">In order to cancel your order, please click on "Help" and then "I want to cancel my order". Please note that we may charge you a cancellation fee as it helps us to minimise food wastage and also compensate our restaurant partners for cancelled orders.</div>
        </div>
        <Footer/>
        </div>
    )
}
export default Faq;