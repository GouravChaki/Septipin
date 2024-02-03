import styled from "styled-components";

export const SwiperContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const SwiperCard = styled.div`
  flex-shrink: 0;
  height: 25rem;
  padding-top: 2rem;
  padding-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background: url(${(props) => props.image}) center/contain no-repeat;
  background-color: #d06262;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  @media (max-width: 900px) {
    background: #d06262;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 6rem;
  left: 5rem;
  z-index: 5;
  @media (max-width: 600px) {
    left: 0rem;
  }
`;
export const SwiperName = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  text-align: center;
  font-size: 3.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.09463rem;
`;

export const SwiperDesc = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  text-align: center;
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.09463rem;
`;
export const ImageOverlay = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  min-width: 100%;
  height: 25rem;
  background: rgba(213, 141, 141, 0.25);
  z-index: 2;
`;
