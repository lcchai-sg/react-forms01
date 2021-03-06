import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/shared/Header/header';
import Footer from './components/shared/Footer/footer';
import Register from './components/Register/register';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Register />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
