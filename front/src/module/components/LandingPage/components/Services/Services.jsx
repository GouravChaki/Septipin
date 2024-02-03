import React, { useEffect, useState } from "react";
import MediaTracker from "../Images/MediaTracker.svg";
import NutrientTracker from "../Images/NutrientTracker.svg";
import StatisticalTracker from "../Images/StatisticalTracker.svg";
import Card from "../Card/Card";
import { Inner, Overlay, StyledFlex } from "./Services.styles";

function Services() {
  const details = [
    {
      title: "Statistical Tracker",
      description:
        "To maintain track records regarding the fetal growth , weight and baby kicks",
      logo: StatisticalTracker,
    },
    {
      title: "Nutrient Tracker",
      description: "Perfect meals for post and part pregnancy",
      logo: NutrientTracker,
    },
    {
      title: "Media Suggestions",
      description:
        "To maintain track records regarding the fetal growth , weight and baby kicks",
      logo: MediaTracker,
    },
  ];
  return (
    <>
      <Overlay />
      <Inner>
        <div className="innerHeader">Our Services</div>
        <StyledFlex>
          {details.map((eachDetail) => {
            return (
              <Card
                key={eachDetail.title}
                title={eachDetail.title}
                description={eachDetail.description}
                logo={eachDetail.logo}
              />
            );
          })}
        </StyledFlex>
      </Inner>
    </>
  );
}

export default Services;
