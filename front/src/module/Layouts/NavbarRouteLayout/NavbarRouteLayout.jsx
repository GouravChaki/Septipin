import React from "react";
import { Navbar } from "../../common/Navbar";
function NavbarRouteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default NavbarRouteLayout;
