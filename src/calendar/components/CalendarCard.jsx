import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Draggable } from '@fullcalendar/interaction';
import DraggableEvent from './DraggableEvent';
import './CalendarCard.css';

function CalendarCard({ events, setModalShow }) {
  CalendarCard.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    events: PropTypes.arrayOf(PropTypes.object),
    setModalShow: PropTypes.func.isRequired,
  };

  CalendarCard.defaultProps = {
    events: [],
  };

  const eventRef = useRef([]);

  // const eventsRef = useRef([]);

  // eventsRef.current = an array of refs the length of events with each ref corresponding to index
  // eventsRef.current = events.map((event, i) => eventsRef.current[i] ?? createRef());

  const mapEvents = () => (
    events.map((event) => (
      <ListGroup.Item key={event.id}>
        <DraggableEvent
          color={event.color.hex}
          id={event.id}
          title={event.title}
          description={event.description}
          // ref={eventsRef.current[i]}
        />
      </ListGroup.Item>
    ))
  );

  // useEffect(() => {
  //   // new draggable object with eventsRef
  //   console.log(eventsRef.current[0].current);
  //   new Draggable(eventsRef.current[0].current, {
  //     // itemSelector: '.draggable-event',
  //     eventData(event) {
  //       return ({
  //         color: event.dataset.color,
  //         title: event.getAttribute('title'),
  //         id: event.dataset.id,
  //       });
  //     },
  //   });
  // });

  useEffect(() => {
    // new draggable object with eventsRef
    // eslint-disable-next-line no-new
    new Draggable(eventRef.current, {
      itemSelector: '.draggable.event',
      eventData(event) {
        return ({
          color: event.dataset.color,
          title: event.getAttribute('title'),
          id: event.dataset.id,
          description: event.dataset.custom,
        });
      },
    });
  }, [eventRef]);

  return (
    <div>
      <Card>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className="border-bottom-0">
            <Accordion.Header className="calendar-card-header">
              Add event
            </Accordion.Header>
            <Accordion.Body>
              <Container className="justify-content-center" fluid>
                <Button onClick={setModalShow}> Add </Button>
              </Container>
              <ListGroup variant="flush" as="ol" numbered>
                <ListGroup.Item as="li">Add an event by clicking the add button</ListGroup.Item>
                <ListGroup.Item as="li">Drag and drop it onto the calendar</ListGroup.Item>
                <ListGroup.Item as="li">Switch to day view to position correct time of day </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <ListGroup>
          <div ref={eventRef}>
            {mapEvents()}
          </div>
        </ListGroup>
      </Card>
    </div>
  );
}

export default CalendarCard;
