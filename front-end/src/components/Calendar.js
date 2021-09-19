import React from "react";
import { LANGUAGE, HOLIDAYS_IN_CANADA, UWATERLOO_IMPORTANT_DATES,
        GOOGLE_API_KEY, GOOGLE_CLIENT_ID } from "../config";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class CalendarWidget extends React.Component {
    state = {
        events: [
          {
            start: moment().toDate(),
            end: moment()
              .add(1, "days")
              .toDate(),
            title: "Some title"
          }
        ]
      };
    
      render() {
        return (
          <div className="App">
            <Calendar
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={this.state.events}
              style={{ height: "100vh" }}
            />
          </div>
        );
      }
}

export default CalendarWidget;