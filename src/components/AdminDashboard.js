import React, { useState } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";

const AdminDashboard = () => {
  const [events, setEvents] = useState([
    { id: 1, name: "Beach Fest", date: "2025-05-01" },
    { id: 2, name: "Sunset Music", date: "2025-05-10" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const updated = events.filter((e) => e.id !== id);
    setEvents(updated);
  };

  const handleSave = () => {
    const updated = events.map((e) =>
      e.id === selectedEvent.id ? selectedEvent : e
    );
    setEvents(updated);
    setShowModal(false);
  };

  return (
    <Container className="p-4">
      <h2 className="mb-4 text-center">Admin Dashboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(event)}>
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => handleDelete(event.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedEvent.name}
                  onChange={(e) =>
                    setSelectedEvent({ ...selectedEvent, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={selectedEvent.date}
                  onChange={(e) =>
                    setSelectedEvent({ ...selectedEvent, date: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
