import React from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Container } from "react-bootstrap";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Beach Festival",
    allDay: true,
    start: new Date(2025, 4, 15), // May 15, 2025
    end: new Date(2025, 4, 15),
  },
  {
    title: "Food & Music Fiesta",
    start: new Date(2025, 4, 18, 17, 0),
    end: new Date(2025, 4, 18, 22, 0),
  },
];

const Calendar = () => {
  return (
    <Container className="p-4">
      <h2 className="text-center mb-4">Festival Calendar</h2>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </Container>
  );
};

export default Calendar;
