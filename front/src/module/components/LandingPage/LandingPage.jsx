import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { OuterContainer } from "./LandingPage.styles";
import Slider from "./components/Slider/Slider";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Divider from "./components/Divider/Divider";
import AboutUs from "./components/AboutUs/AboutUs";
import { useAuth } from "../../common/hooks/useAuth";

function LandingPage() {
  
  return (
    <OuterContainer>
      <div className="slider">
        <Slider />
      </div>
      <Divider />
      <div className="services">
        <Services />
      </div>
      <Divider />
      <div className="testimonials">
        <Testimonials />
      </div>
      <Divider />
      <div className="contact-us">
        <AboutUs />
      </div>
    </OuterContainer>
  );
}

export default LandingPage;
