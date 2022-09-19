// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//import relevant modules

import React, { useState } from "react";
import './dashboard-navbar.scss';
import { useWindowSize } from "@react-hook/window-size";
import MobileMenu from "./mobile-menu/mobile-menu";


// import logo
const isellLogo : string = require('../../../assets/isell-logo.png');
const person : string = require('../../../assets/person.jpeg');

const DashboardNavbar = ({businessDetails, displayName}) => {
    const [menubar, setmenuBar] = useState(false)
    
 const [width]  = useWindowSize();
    return (
        <div className="dashboard__navbar">
            <div className="dashboard__sidebar">
             
             <img className="dashboard__logo" src={isellLogo} alt="isell logo" />
            </div>
            
                <div className="navbar__content">
                    {/* {
                    width <= 768 && 
                <div>
                    <div className="mobile__nav" 
                    onClick={(e) => {setmenuBar(!menubar); console.log(menubar)}}
                style={{
                    zIndex: menubar ? "1200" : "0"
                }}
                >
                    <div className={`menu-bars ${menubar ? "change" : ""}`} id="menu-bars"
                    style={{ 
                
                    }}
                    >
                    <div className="bar1" 
                    style={{
                    
                    }}
                    ></div>
                    <div className="bar2" 
                        style={{
                        
                        }}
                    ></div>
                    <div className="bar3"
                            style={{
                            
                            }}
                    ></div>
                    </div>
                    </div>
                    {
                        !menubar ?    <MobileMenu /> : null
                    }
                 
                    </div>
                        } */}
                {
                    businessDetails &&   <img className="person__logo" src={businessDetails?.business_url} alt="person pfp" />
                }
            
              <p className="person__p">{displayName}</p>
            </div>
        </div>
           
    );
}

export default DashboardNavbar;


