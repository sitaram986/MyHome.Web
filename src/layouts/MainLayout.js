
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftMenu from "./LeftMenu";

const MainLayout = () => {
  return (
    <div className="layout">
      <div className="loader-bg">
		    <div className="loader-track">
			    <div className="loader-fill"></div>
		    </div>
	    </div>
      <nav className="pcoded-navbar  ">
        <div className="navbar-wrapper  ">
          <div className="navbar-content scroll-div " >	
              <LeftMenu />
          </div>
        </div>
      </nav>	
            <Header />
        <main className="main-content">
            <div className="pcoded-main-container">
                <div className="pcoded-content">
                    <Outlet />
                </div>
            </div>
        </main>
    </div>
  );
};

export default MainLayout;