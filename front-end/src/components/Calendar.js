import React from "react";
import Calendar from "@ericz1803/react-google-calendar"
import { css } from "@emotion/react";
import { LANGUAGE, HOLIDAYS_IN_CANADA, GOOGLE_API_KEY, GOOGLE_CLIENT_ID } from "../config";

let calendars = [
    {calendarId: HOLIDAYS_IN_CANADA}
];

let styles = {
    //you can use object styles (no import required)
    calendar: {
      borderWidth: "3px", //make outer edge of calendar thicker
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