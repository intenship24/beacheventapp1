// Reviews.js
import React from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

const Reviews = () => {
  return (
    <Container className="p-4">
      <h2 className="mb-4 text-center">User Reviews</h2>
      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write your review..."
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <ListGroup>
        <ListGroup.Item>
          <strong>John:</strong> Amazing event at Panambur Beach!
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Priya:</strong> Loved the food festival experience!
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Reviews;
