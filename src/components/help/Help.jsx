import Footer from "../footer/Footer"
import Navbar from "../nav/Navbar";

const Help=()=>{
    return(
        <div className="overflow-x-hidden">
            <Navbar/>
            <div className="h-20 w-full"></div>
            <div className="bg-[#37718e] w-full h-44 p-6">
                <div className="p-4 ml-16 mt-6">
                    <div className="text-3xl text-white font-bold">Help and Support</div>
                    <div className="flex"><p className="text-lg text-white">Let's take a step ahead and help you better.</p></div>
                </div>
                
            </div>
            <div className="w-full mt-4 py-4">
                   <h2 className="text-2xl ml-16 font-bold">Legal, Terms & Conditions</h2> 
                   <p className="text-lg mt-4 ml-16">Terms of Use</p>
                   <div className="mt-4 ml-16 w-11/12">These terms of use (the "Terms of Use") govern your use of our website (the "Website") and our "Pomato" application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Services"). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.</div>
                   <h2 className="text-lg ml-16 mt-8">Privacy Policy</h2>
                   <div className="mt-4 ml-16 w-11/12">We Pomato are fully committed to respecting your privacy and shall ensure that your personal information is safe with us. This privacy policy sets out the information practices of ("Website") including the type of information is collected, how the information is collected, how the information is used and with whom it is shared. Reference to "you" in this Privacy Policy refers to the users of this Website whether or not you access the services available on the Website or consummate a transaction on the Website. By using or accessing this Website, you agree to the terms and conditions of this Privacy Policy. You also expressly consent to our use and disclosure of your Personal Information (as defined below) in any manner as described in this Privacy Policy and further signify your agreement to this Privacy Policy and the Terms of Use (being incorporated by reference herein). If you do not agree with the terms and conditions of this Privacy Policy, please do not proceed further or use or access this Website. </div>
                </div>
            <Footer/>
        </div>
    )
}
export default Help;