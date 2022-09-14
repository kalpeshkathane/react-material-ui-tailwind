import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TableBarIcon from "@mui/icons-material/TableBar";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PieChartIcon from "@mui/icons-material/PieChart";
import SettingsIcon from "@mui/icons-material/Settings";

function SidebarComponent() {
  const sidebarMenu = [
    {
      title: "Dashboard",
      icon: <HomeIcon />,
    },
    {
      title: "Customers",
      icon: <PersonIcon />,
    },
    {
      title: "Tables",
      icon: <TableBarIcon />,
    },
    {
      title: "Cashier",
      icon: <CurrencyExchangeIcon />,
    },
    {
      title: "Orders",
      icon: <LocalMallIcon />,
    },
    {
      title: "Reports",
      icon: <PieChartIcon />,
    },
    {
      title: "Settings",
      icon: <SettingsIcon />,
    },
  ];
  return (
    <div className="flex flex-no-wrap">
      <div className="w-24 bg-white absolute sm:relative shadow md:h-full flex-col justify-between hidden sm:flex">
        <div className="px-2">
          {sidebarMenu?.map((menu) => {
            return (
              <div className="flex flex-col justify-center items-center px-2 py-3 my-3 rounded menu-button cursor-pointer">
                {menu.icon}
                <div className="text-xs mt-1">{menu.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;
