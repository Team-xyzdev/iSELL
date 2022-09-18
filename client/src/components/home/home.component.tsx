import React from "react";
import Footer from "./footer/footer.components";
import HeroSection from "./hero-section/hero-section.components";
import "./home.scss";

//import sections of the landing page
import Navbar from "./navbar/navbar.component";
import SplashSection from "./splash-section/splash-section.component";
import SubFooter from "./sub-footer/sub-footer.component";
import SubSection from "./sub-section/sub-section.component";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar isActive={false} />
      <SplashSection />
      <SubSection />
      <HeroSection />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default Home;
