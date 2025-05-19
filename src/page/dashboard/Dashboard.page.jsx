import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable";
import tickets from "../../assets/data/dummy-ticket.json"

export const Dashboard = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            add new ticket
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mb-2">
          <div className="">Total tickets: 50</div>
          <div className="">Pending tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets = {tickets} />
        </Col>
      </Row>
    </Container>
  );
};
