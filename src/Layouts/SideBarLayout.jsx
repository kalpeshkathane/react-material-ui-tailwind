import React from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";
import SidebarComponent from "../Components/SidebarComponent";
import TopbarComponent from "../Components/TopbarComponent";

function SideBarLayout(props) {
  return (
    <div className="flex w-full h-full flex-col bg-gray-100">
      <TopbarComponent />
      <div className="flex w-full h-full flex-row">
        <SidebarComponent />
        <div className="flex w-full h-full flex-col">
          <Outlet />
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}

export default SideBarLayout;
