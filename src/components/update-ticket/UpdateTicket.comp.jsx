import React from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <br />
      <Form.Text>Please reply your message here or update the ticket</Form.Text>
      <Form.Control
        value={msg}
        onChange={handleOnChange}
        as="textarea"
        rows="5"
        name="detail"
      />

      <div className="text-end mt-3 mb-3">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

UpdateTicket.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};
