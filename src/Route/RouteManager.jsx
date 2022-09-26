import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FullLayout from "../Layouts/FullLayout";
import SideBarLayout from "../Layouts/SideBarLayout";

import Dashboard from "../Components/Pages/Dashboard";
import NotFound from "../Components/Pages/NotFound";
const Login = lazy(() => import('../Components/Pages/Login'));
const BlankPage = lazy(() => import('../Components/Pages/BlankPage'));

function RouteManager() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route element={<SideBarLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route element={<FullLayout />}>
        <Route path="/login" element={<Login />} />
          <Route path="/404" element={<BlankPage />} />
          <Route path="/notfound" element={<NotFound/>} />
        </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default RouteManager;
