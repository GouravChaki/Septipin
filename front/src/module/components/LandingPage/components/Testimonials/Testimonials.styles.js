import styled from "styled-components";

export const SwiperContainer = styled.div`
  width: 90%;
  margin: auto;
  .innerHeader {
    color: #000;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 4rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
  }
`;

export const SwiperCard = styled.div`
  flex-shrink: 0;
  height: 18rem;
  padding-top: 2rem;
  padding-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 0.50275rem;
  background-color: ${(props) => props.background};
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SwiperName = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: ${(props) => props.color};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const StyledImg = styled.div`
  width: 6rem;
  height: 4rem;
  overflow: hidden;
  flex-shrink: 0;
`;

export const SwiperDesc = styled.p`
  margin-top: 1.5rem;
  color: ${(props) => props.color};
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
