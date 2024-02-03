import styled from "styled-components";

export const Container = styled.div`
  flex-shrink: 0;
  width: 20rem;
  height: 20rem;
  padding-top: 2rem;
  padding-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 0.50275rem;
  background: #fff;
  box-shadow: 15px 15px 4px 0px rgba(0, 0, 0, 0.13);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.13);
  }
  .imageWrapper {
    text-align: center;
    width: 6;
    height: 6;
    flex-shrink: 0;
    margin-top: 2rem;
    margin-right: auto;
    margin-left: auto;
  }
  .title {
    color: #000;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.50831rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .desc {
    color: #000;
    text-align: center;
    font-size: 1.13125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
