import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import TableBarIcon from "@mui/icons-material/TableBar";
import SearchIcon from "@mui/icons-material/Search";
import AutorenewIcon from "@mui/icons-material/Autorenew";

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
              <div className="w-full h-full flex items-center">
                <TextField
                  id="outlined-basic"
                  label="Search products..."
                  variant="filled"
                  size="small"
                  className="border-none"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <div className="h-full flex items-center justify-end">
              <div className="w-full h-full flex items-center">
                <div className="w-auto pr-4 h-full flex items-center ">
                  <IconButton color="secondary" aria-label="Refresh" className="bg-gray-100 text-black rounded">
                    <AutorenewIcon />
                  </IconButton>
                </div>
                <div className="w-auto pr-4 h-full flex items-center">
                  <Button
                    variant="contained"
                    className="bg-orange-400 text-white shadow-none"
                    startIcon={<TableBarIcon />}
                    size="large"
                  >
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
