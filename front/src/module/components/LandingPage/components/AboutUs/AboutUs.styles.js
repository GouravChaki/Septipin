import styled from "styled-components";

export const MainContainer = styled.div`
  flex-shrink: 0;
  max-width: 100%;
  position: relative;
  .innerHeader {
    color: #000;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 5rem;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 1rem;
  height: 30rem;
  flex-shrink: 0;
  background: #d9d9d9;
  padding: 4rem;
  .imageContainer {
    width: 27.9375rem;
    height: 22.75rem;
    flex-shrink: 0;
    overflow: hidden;
  }
  .textContainer {
  }
`;

export const Title = styled.div`
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.28438rem;
`;
export const Desc = styled.div`
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.24375rem;
`;
