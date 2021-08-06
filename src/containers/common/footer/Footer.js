/* eslint-disable prefer-const */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

// import './Footer.css';

export const Footer = props => {
  return (
    <footer className="footer-container">
      <Col md="12">
        <div className="copyright-text">
          Copyright &copy; 2016-20, LLC. All Rights Reserved.
        </div>
      </Col>
    </footer>
  );
};
