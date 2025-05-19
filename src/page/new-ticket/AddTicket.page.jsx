import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/Breadcrumb/Breadcrumb.comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { shortText } from "../../utils/validation";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataErro, setFrmDataErro] = useState(initialFrmError);
  useEffect(() => {}, [frmData, frmDataErro]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });

    console.log(name, value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    
    setFrmDataErro(initialFrmError);
    const isSubjectValid = await shortText(frmData.subject);

      setFrmDataErro({
        ...initialFrmError,
        subject: !isSubjectValid,
      });

    console.log("Form submit request received", frmData);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnchange={handleOnchange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
            frmDataErro={frmDataErro}
          />
        </Col>
      </Row>
    </Container>
  );
};
