import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const BeachAttractions = () => {
  const beachImages = [
    "https://karnatakatourism.org/wp-content/uploads/2020/06/Panambur-Beach-800x450-1.jpg", // sunny with boats
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-panambur-beach-mangalore-karnataka-city-hero?qlt=82&ts=1726722213408", // cliffside beach
    "https://static.toiimg.com/thumb/109861375/Someswara-Beach-in-Mangalore.jpg?width=636&height=358&resize=4", // umbrellas
  ];

  return (
    <Container className="p-4">
      <h2 className="text-center mb-4">Beach Attractions in Mangalore</h2>
      <Row>
        {beachImages.map((img, index) => (
          <Col md={4} key={index} className="mb-3">
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>Beach {index + 1}</Card.Title>
                <Card.Text>
                  Beautiful view, great food stalls, and water sports.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BeachAttractions;
