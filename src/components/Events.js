import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
} from "react-bootstrap";

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const eventImages = [
    "https://www.specialholidays.com/blog/wp-content/uploads/2021/04/Sunburn-Goa.jpg", // waves
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30", // music stage
    "https://media.istockphoto.com/id/1390097746/photo/seafood-platter-in-a-tropical-white-beach.jpg?s=612x612&w=0&k=20&c=re9xC2jChAJcgZtduClPfREVXqsr7muxKVYRrYZlx00=", // evening crowd
    "https://media.istockphoto.com/id/1068404632/photo/boys-and-girls-playing-volleyball-on-the-beach.jpg?s=612x612&w=0&k=20&c=5SPxb-XsVWY6_JP4zkzSxk16Po2-5R0qoPGHbRqvBqo=", // friends by sea
  ];

  const handleRegisterClick = (index) => {
    setSelectedEvent(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ name: "", email: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thanks ${formData.name}, you’ve registered for Event ${
        selectedEvent + 1
      }`
    );
    handleClose();
  };

  return (
    <Container className="p-4">
      <h2 className="text-center mb-4">All Events</h2>

      <Form className="mb-4">
        <Form.Select>
          <option>Filter by Category</option>
          <option>Festivals</option>
          <option>Music</option>
          <option>Food</option>
          <option>Sports</option>
        </Form.Select>
      </Form>

      <Row>
        {eventImages.map((img, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>Event {index + 1}</Card.Title>
                <Card.Text>
                  Location: Beach {index + 1}, Date: 2025-05-{10 + index}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleRegisterClick(index)}
                >
                  Register
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Registration */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Register for Event {selectedEvent !== null && selectedEvent + 1}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit Registration
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Events;
