import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import PetSitterProfile from '../../components/PetSitterProfile';
import Picker from '../../components/Picker';
import SelectionBar from '../../components/SelectionBar';
import PriceSlider from '../../components/PriceSlider';
import API from "../../utils/API";

class CustomerPage extends Component {


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6" sm-12>
          <h1> Find you pet sitter!</h1>
            <Picker />
            <SelectionBar />
            <PriceSlider />
          </Col>
          <Col size="md-6" sm-12>
            <PetSitterProfile />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CustomerPage;
