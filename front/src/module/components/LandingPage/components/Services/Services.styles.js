import styled from "styled-components";

export const Inner = styled.div`
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
export const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4rem;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 46rem;
  left: 0;
  min-width: 100%;
  height: 25rem;
  background: rgba(246, 246, 246, 100%);
  @media (max-width: 600px) {
    height: 80rem;
  }
`;
