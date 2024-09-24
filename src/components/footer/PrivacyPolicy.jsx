import Navbar from "../nav/Navbar";
import Footer from "./Footer"

const PrivacyPolicy=()=>{
 return(
    <div className="overflow-x-hidden">
        <Navbar/>
        <div className="h-20 w-full"></div>
        <div className="w-full h-screen mt-12">
        <div className="w-full text-2xl font-bold flex justify-center">Privacy Policy</div>
        <div className="mt-8">We Pomato are fully committed to respecting your privacy and shall ensure that your personal information is safe with us. This privacy policy sets out the information practices of ("Website") including the type of information is collected, how the information is collected, how the information is used and with whom it is shared. Reference to "you" in this Privacy Policy refers to the users of this Website whether or not you access the services available on the Website or consummate a transaction on the Website. By using or accessing this Website, you agree to the terms and conditions of this Privacy Policy. You also expressly consent to our use and disclosure of your Personal Information (as defined below) in any manner as described in this Privacy Policy and further signify your agreement to this Privacy Policy and the Terms of Use (being incorporated by reference herein). If you do not agree with the terms and conditions of this Privacy Policy, please do not proceed further or use or access this Website.</div>
        </div>
        <Footer/>
    </div>
 )
}
export default PrivacyPolicy;