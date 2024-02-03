// Calendar.styles.js
import styled from "styled-components";
import Calendar from "react-calendar";
export const CustomCalendarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomCalendarWrapper = styled.div`
  background-color: #fff;
  border: 4px solid #c2185b;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
`;

export const CustomCalendar = styled(Calendar)`
  font-family: Arial, sans-serif;
  border: 2px solid #c2185b;
  border-radius: 8px;
  transform: scale(2.2, 2.3);
  @media only screen and (max-width: 900px) {
    transform: scale(1, 1);
  }
`;

export const CustomTile = styled.div`
  color: #333;
  font-weight: bold;
  &:hover {
    background-color: #f48fb1 !important;
    color: #c2185b !important;
  }
`;

export const CustomDisabledTile = styled(CustomTile)`
  color: #aaa;
  cursor: not-allowed;
`;

export const ModalContainer = styled.div`
  /* Styles for the modal container */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
`;
