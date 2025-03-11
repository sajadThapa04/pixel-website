import React from "react";
import Header from "./components/Headers/Headers";
import Footer from "./components/Footers/Footers";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
