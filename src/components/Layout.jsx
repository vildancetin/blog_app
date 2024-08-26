import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Outlet className="flex-grow"/>
      <Footer />
    </div>
  );
};

export default Layout;
