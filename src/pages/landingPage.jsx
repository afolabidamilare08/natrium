import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ProtocolFeeSection from "../components/ProtocolFeeSection";
import ProtocolTokenomics from "../components/ProtocolTokenomics";

const LandingPage = () => {

    return(

        <>
        
            <NavBar/>
            <HeroSection/>
            <AboutSection/>
            <ProtocolFeeSection/>
            <ProtocolTokenomics/>
            <Footer/>

        </>

    );

}

export default LandingPage;