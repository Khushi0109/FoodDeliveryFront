import Navbar from "../nav/Navbar"
import Footer from "./Footer"

const Terms=()=>{
    return(
        <div className="overflow-x-hidden">
        <Navbar/>
        <div className="h-20 w-full"></div>
        <div className="w-full h-screen mt-12">
        <div className="flex justify-center font-bold text-2xl">Terms of Use and Privacy</div>
        <div className="mt-4">These terms of use (the "Terms of Use") govern your use of our website (the "Website") and our "Pomato" application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Services"). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.</div>
        <div className="mt-2">We Pomato are fully committed to respecting your privacy and shall ensure that your personal information is safe with us. This privacy policy sets out the information practices of ("Website") including the type of information is collected, how the information is collected, how the information is used and with whom it is shared. Reference to "you" in this Privacy Policy refers to the users of this Website whether or not you access the services available on the Website or consummate a transaction on the Website. By using or accessing this Website, you agree to the terms and conditions of this Privacy Policy. You also expressly consent to our use and disclosure of your Personal Information (as defined below) in any manner as described in this Privacy Policy and further signify your agreement to this Privacy Policy and the Terms of Use (being incorporated by reference herein). If you do not agree with the terms and conditions of this Privacy Policy, please do not proceed further or use or access this Website.</div>
        </div>
        <Footer/>
        </div>
    )
}
export default Terms;