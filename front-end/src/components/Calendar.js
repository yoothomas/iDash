import React from "react";
import Calendar from "@ericz1803/react-google-calendar"
import { css } from "@emotion/react";
import { LANGUAGE, HOLIDAYS_IN_CANADA, UWATERLOO_IMPORTANT_DATES,
        GOOGLE_API_KEY, GOOGLE_CLIENT_ID } from "../config";

let calendars = [
    {calendarId: HOLIDAYS_IN_CANADA, color: "#B241D1"},
    {calendarId: UWATERLOO_IMPORTANT_DATES, color: "yellow"}
];

let styles = {
    //you can use object styles (no import required)
    calendar: {
      borderWidth: "3px", //make outer edge of calendar thicker
    },
    today: css`
    /* highlight today by making the text red and giving it a red border */
        color: red;
        border: 1px solid red;
    `,
    event: {
        color: "blue"
    }
};

class CalendarWidget extends React.Component {
    render() {
        return (
            <div>
            <Calendar 
            apiKey={GOOGLE_API_KEY} 
            calendars={calendars} 
            styles={styles} 
            language={LANGUAGE}
            />
          </div>
        );
    }
}

export default CalendarWidget;