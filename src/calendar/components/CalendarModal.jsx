import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CalendarModal({
  title, header, body, children, show, setModalHide,
}) {
  CalendarModal.propTypes = {
    title: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
    children: PropTypes.node,
    show: PropTypes.bool,
    setModalHide: PropTypes.func.isRequired,
  };

  CalendarModal.defaultProps = {
    title: '',
    header: '',
    body: '',
    children: '',
    show: false,
  };

  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header onHide={setModalHide} closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{header}</h4>
        <p>{body}</p>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={setModalHide}> Cancel </Button>
        <Button form="add-event-form" type="submit"> Submit </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CalendarModal;
