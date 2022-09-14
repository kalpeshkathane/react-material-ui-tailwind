import { Button } from "@mui/material";
import React from "react";
import TableBarIcon from "@mui/icons-material/TableBar";

export default function TopbarComponent() {
  return (
    <>
      <div className="bg-gray-200 w-full h-full1">
        {/* Navigation starts */}
        <nav className="w-full mx-auto bg-white border-b-2">
          <div className="container1 px-6 justify-between h-16 flex items-center mx-auto">
            <div className="h-full flex items-center">
              <div className="mr-10 flex items-center">
                <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                  ScanBills
                </h3>
              </div>
            </div>
            <div className="h-full xl:flex items-center justify-end hidden">
              <div className="w-full h-full flex items-center">
                <div className="w-full pr-4 h-full flex items-center">
                  <Button variant="contained" className="bg-orange-400 text-white" startIcon={<TableBarIcon />}>
                    Select Table
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Navigation ends */}
      </div>
    </>
  );
}
