import React from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";
import SidebarComponent from "../Components/SidebarComponent"

function SideBarLayout(props) {
  return (
    <div className="flex w-full h-full flex-col bg-gray-100">
      <SidebarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

export default SideBarLayout;
