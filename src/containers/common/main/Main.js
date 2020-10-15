import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export const Main = props => {
  return (
    <Container fluid className="main-wrap">
      <div className="content-wrapper">
        <main>
          <div className="panel-body">Home</div>
        </main>
      </div>
    </Container>
  );
};
