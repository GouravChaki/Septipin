// Calendr.js
import React from "react";
import { CustomCalendarWrapper, CustomCalendar } from "./Calendar.styles";
import "react-calendar/dist/Calendar.css";

const Calendr = (props) => {
  const tileClassName = ({ date, view }) => {
    if (view === "month" && date.getDay() === 0) {
      return "sunday";
    }
    return null;
  };

  const tileDisabled = ({ date }) => {
    return date > new Date();
  };

  const customTileStyle = {
    height: "60vh", // Adjust the tile height as needed
  };

  const CurrentDate = (date) => {
    const currentDate = new Date();
    return (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    );
  };


  return (
    <React.Fragment>
      <CustomCalendarWrapper>
        <CustomCalendar
          onChange={props.setDate}
          value={props.date}
          tileClassName={tileClassName}
          calendarType="gregory"
          tileDisabled={tileDisabled}
          style={customTileStyle} // Apply custom style for the calendar
          onClickDay={(date) => {
            if (CurrentDate(date)) {
              props.setIsCurrentDate('1')
              //props.openModal();
            } else {
              // Open your OtherComponent or perform other actions
              props.setIsCurrentDate('2')
              //props.openEditModal();
            }
            props.openModal()
          }}
        />
      </CustomCalendarWrapper>
    </React.Fragment>
  );
};

export default Calendr;
