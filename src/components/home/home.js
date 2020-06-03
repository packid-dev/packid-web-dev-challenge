// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';

import Details from "./details";

const Home = () => (
  <Row>
    <Col s={12}>
        <h5 className="subtitle"></h5>
          <Details></Details>
    </Col>
  </Row>
);

export default Home;