import React from "react";
import { Outlet } from "react-router-dom";

function FullLayout({ children }) {
  return (
    <div className="flex h-full flex-col w-full">
      <Outlet />
    </div>
  );
}

export default FullLayout;
