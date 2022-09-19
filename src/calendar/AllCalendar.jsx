import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import _ from 'lodash';
import Calendar from './components/Calendar';
import CalendarCard from './components/CalendarCard';
import CalendarModal from './components/CalendarModal';
import AddEventForm from './components/AddEventForm';

function AllCalendar() {
  const initialEventState = [
    {
      title: 'homework', color: { hex: '#f47373' }, description: 'homework time', id: _.uniqueId(),
    },
    {
      title: 'class', color: { hex: '#1e90ff' }, description: 'class time', id: _.uniqueId(),
    },
    {
      title: 'ISP', color: { hex: '#ff8a65' }, description: 'ISP time!', id: _.uniqueId(),
    },
  ];

  const [calendarEvents, setCalendarEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [modalDisplay, setModalDisplay] = useState(false);
  const [color, setColor] = useState({ hex: '#0d6efd' });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // finds if events are in local storage

  useEffect(() => {
    const draggableEvents = window.localStorage.getItem('draggableEvents');
    if (draggableEvents && draggableEvents !== 'undefined' && draggableEvents.length > 0) {
      setEvents(JSON.parse(draggableEvents));
    } else {
      setEvents(initialEventState);
    }

    const storedCalendarEvents = window.localStorage.getItem('calendarEvents');
    if (storedCalendarEvents && storedCalendarEvents !== 'undefined' && storedCalendarEvents.length > 0) {
      setCalendarEvents(JSON.parse(storedCalendarEvents));
    }
  }, []);

  // useEffect(() => {
  //   const storedCalendarEvents = window.localStorage.getItem('calendarEvents');
  //   if (storedCalendarEvents && storedCalendarEvents
  // !== 'undefined' && storedCalendarEvents.length > 0) {
  //     setCalendarEvents(JSON.parse(storedCalendarEvents));
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log(events);
  //   window.localStorage.setItem('draggableEvents', JSON.stringify(events));
  // }, [events]);

  // setter functions for set state
  const setModalShow = () => setModalDisplay(true);
  const setModalHide = () => setModalDisplay(false);

  const setNewColor = (newColor) => setColor(newColor);
  const setNewTitle = (newTitle) => setTitle(newTitle);
  const setNewDescription = (newDescription) => setDescription(newDescription);

  const handleEventFormSubmit = (e) => {
    e.preventDefault();
    const event = {
      title, color: { hex: color.hex }, description, id: _.uniqueId(),
    };
    setModalHide();
    window.localStorage.setItem('draggableEvents', JSON.stringify(events.concat(event)));
    setEvents(events.concat(event));
    setColor({ hex: '#1e90ff' });
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={3} lg={3} xxl={2}>
            <CalendarCard
              events={events}
              setModalShow={setModalShow}
              setModalHide={setModalHide}
            />
          </Col>
          <Col md={9} lg={9} xxl={9}>
            <Calendar events={calendarEvents} />
          </Col>
        </Row>
      </Container>
      <CalendarModal
        title="Add an event"
        show={modalDisplay}
        setModalHide={setModalHide}
      >
        <AddEventForm
          color={color.hex}
          setNewColor={setNewColor}
          title={title}
          setNewTitle={setNewTitle}
          description={description}
          setNewDescription={setNewDescription}
          handleSubmit={handleEventFormSubmit}
        />
      </CalendarModal>
    </div>
  );
}

export default AllCalendar;
