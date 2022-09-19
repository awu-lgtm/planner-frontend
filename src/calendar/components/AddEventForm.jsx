import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { BlockPicker } from 'react-color';

function AddEventForm({
  color, setNewColor, title, setNewTitle, description, setNewDescription, handleSubmit,
}) {
  AddEventForm.propTypes = {
    color: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    setNewColor: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    setNewTitle: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    setNewDescription: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    buttonRef.current.firstChild.style.setProperty('background-color', `${color}`, 'important');
  }, [color]);

  return (
    <div>
      <Container className="justify-content-center" fluid>
        <Form id="add-event-form" onSubmit={handleSubmit}>
          {/* onSubmit={handleSubmit} */}
          <Form.Group className="mb-3" as={Row} controlId="formBasicEmail">
            <Row className="form-fields justify-content-center">
              <Col>
                <FloatingLabel label="Name of event or task">
                  <Form.Control
                    value={title}
                    onChange={(e) => setNewTitle(e.target.value)}
                    type="text"
                    placeholder="Name of event or task"
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
            <Row className="form-fields justify-content-center">
              <Col>
                <FloatingLabel label="Description">
                  <Form.Control
                    value={description}
                    onChange={(e) => setNewDescription(e.target.value)}
                    as="textarea"
                    type="text"
                    placeholder="Description"
                    style={{ height: '7rem' }}
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group as={Row}>
            <Row className="justify-content-center">
              <Col>
                <DropdownButton ref={buttonRef} id="dropdown-basic-button" title="Color of tab" autoClose="outside">
                  <Dropdown.Item id="dropdown-item-colorpicker">
                    <BlockPicker
                      color={color}
                      colors={['#F47373', '#697689', '#37D67A', '#2CCCE4', '#1e90ff', '#0D6EFD', '#555555', '#dce775', '#ff8a65', '#ba68c8']}
                      onChange={setNewColor}
                    />
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
      <br />
    </div>
  );
}

export default AddEventForm;
