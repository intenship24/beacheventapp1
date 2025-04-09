// Home.js
import React, { useRef, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Home = () => {
  const exploreRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const scrollToExplore = () => {
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const events = [
    {
      id: 1,
      title: "Beach Splash",
      date: "2025-04-11",
      location: "Beach Paradise",
      image:
        "https://media.istockphoto.com/id/485019258/photo/splashes-of-wave-at-sunrise.jpg?s=612x612&w=0&k=20&c=vns6C6ObWvvW86KDPAgBZMlNZb26gT9pbb_9j7I9EM0=",
    },
    {
      id: 2,
      title: "Sunset Jam",
      date: "2025-04-12",
      location: "Beachside Lounge",
      image:
        "https://media.istockphoto.com/id/622182404/photo/seascape-during-sundown-beautiful-natural-seascape.jpg?s=612x612&w=0&k=20&c=B4FgXX4ZxnFi4oPpgzJjhVCj7LEMy6RKAsjrcIxtPxk=",
    },
    {
      id: 3,
      title: "Sandy Beats",
      date: "2025-04-13",
      location: "Rocky Beach",
      image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    },
  ];

  // Filter logic
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          height: "100vh",
          background: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') center/cover no-repeat`,
        }}
      >
        <h1 className="display-4 fw-bold">
          Welcome to Mangalore Beach Festivals 🌴
        </h1>
        <p className="lead">
          Discover the best beach events and experiences in Mangalore!
        </p>
        <Button variant="light" size="lg" onClick={scrollToExplore}>
          Explore Events
        </Button>
      </div>

      {/* Search + Featured Events Section */}
      <Container ref={exploreRef} className="py-5">
        <h2 className="text-center mb-4">Search Your Festival</h2>
        <Form className="mb-4" onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            type="text"
            placeholder="Search events or beaches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>

        <h3 className="text-center mb-4">Featured Events</h3>
        <Row>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Col md={4} key={event.id} className="mb-4">
                <Card className="bg-secondary text-white">
                  <Card.Img variant="top" src={event.image} alt={event.title} />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>
                      Date: {event.date} | Location: {event.location}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No events found.</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
