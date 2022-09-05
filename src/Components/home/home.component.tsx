import React from "react";
import './home.scss';

//import sections of the landing page
import Navbar from "./navbar/navbar.component";
import SplashSection from "./splash-section/splash-section.component";


const Home = () => {
    return (
     <div className="homepage">
       <Navbar />
       <SplashSection />
     </div>
    )
}

export default Home;