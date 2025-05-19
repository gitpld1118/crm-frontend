import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form-style.css"



export const AddTicketForm = ({ handleOnSubmit, handleOnchange, frmDataErro, frmDt }) => {
  console.log(frmDt);
  return (
    <div className="add-new-ticket mt-3 p-5 bg-light rounded-3">
        <h1 className="text-info text-center">Add New Tickets</h1>
        <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label className="mb-3" column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmDt.subject}
            //   minLength={3}
              maxLength={100}
              onChange={handleOnchange}
              placeholder="Subject"
              className="mb-3"
              required
            />
            <Form.Text className="text-danger">
                {frmDataErro.subject && "Subject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label className="mb-3" column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnchange}
              required
              className="mb-3"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mb-3">Details</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            value={frmDt.detail}
            onChange={handleOnchange}
            rows="5 "
            required
            className="mb-3"
          />
        </Form.Group>

        <Button type="submit" variant="info" className="w-100">
          Login
        </Button>
      </Form>
    </div>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataErro: PropTypes.object.isRequired,
};
