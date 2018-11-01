import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import PetSitterProfile from '../../components/PetSitterProfile';
import API from "../../utils/API";

class CustomerPage extends Component {


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">

              <PetSitterProfile></PetSitterProfile>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default CustomerPage;
