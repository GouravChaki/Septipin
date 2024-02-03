import React from "react";
import { LogoContainer } from "./logo.styles"; // You can create a separate styles file
import logo from "./Logo.png";
const LogoPage = () => {
  return (
      <LogoContainer>
            <img src={logo} alt="Logo" height="50%" width="50%" />
      </LogoContainer>
  );
};

export default LogoPage;
