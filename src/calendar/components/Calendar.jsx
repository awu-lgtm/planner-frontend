import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Calendar({ events }) {
  Calendar.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string, start: PropTypes.string, end: PropTypes.string,
    })).isRequired,
  };

  const calendarRef = useRef(null);

  const handleEventDrop = () => {
    // this is definently hacky
    // but it works
    // because before it was setting the getting the event too early
    setTimeout(() => {
      const calendarApi = calendarRef.current.getApi();
      const calendarEvents = calendarApi.getEvents();
      window.localStorage.setItem('calendarEvents', JSON.stringify(calendarEvents));
    }, 200);
  };

  return (
    <FullCalendar
      ref={calendarRef}
      themeSystem="bootstrap5"
      initialView="dayGridMonth"
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin]}
      headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay' }}
      editable
      drop={handleEventDrop}
      events={events}
    />
  );
}

export default Calendar;
