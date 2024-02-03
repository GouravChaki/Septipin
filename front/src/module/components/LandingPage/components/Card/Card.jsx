import React, { useEffect, useState } from "react";
import { Container } from "./Card.styles";
// eslint-disable-next-line react/prop-types
function Card({ title, description, logo }) {
  return (
    <Container>
      <div className="imageWrapper">
        <img src={logo} />
      </div>
      <div className="title">{title}</div>
      <div className="desc">{description}</div>
    </Container>
  );
}

export default Card;
