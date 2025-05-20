import React from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable";
import tickets from "../../assets/data/dummy-ticket.json";
import { PageBreadcrumb } from "../../components/Breadcrumb/Breadcrumb.comp"
import { Link } from "react-router-dom";


export const Dashboard = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
        <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
        <Link to="/add-ticket">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            add new ticket
          </Button>
          </Link>
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
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
