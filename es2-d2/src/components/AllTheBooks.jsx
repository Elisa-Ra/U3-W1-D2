import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Container, Row, Col } from "react-bootstrap"
import fantasy from "../books/fantasy.json"

import { Component } from "react"

function AllTheBooks() {
  return (
    <Container>
      <h1 className="text-center my-3">Consigli Fantasy!</h1>
      <Row className="justify-content-center">
        {fantasy.map((fantalibro) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={fantalibro.asin}
            className="mb-4"
          >
            <Card style={{ width: "18rem", height: "400px" }}>
              <Card.Img
                className="object-fit-contain"
                variant="top"
                src={fantalibro.img}
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>{fantalibro.title}</Card.Title>
                <Card.Text>Prezzo: {fantalibro.price}&euro;</Card.Text>
              </Card.Body>
              <Button className="flex-1" variant="primary">
                {fantalibro.category}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllTheBooks
