/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { SystemHelper } from '../../../helper/SystemHelper';

export const Header = props => {
  const { userData } = props;

  return (
    <header className="header-container header-bg" data-test="header-component">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">{SystemHelper.PROJECT_NAME}</Navbar.Brand>
        <Nav className="mr-auto">
          {(userData.entityType === SystemHelper.USER_ENTITY_TYPE.LO ||
            userData.entityType === SystemHelper.USER_ENTITY_TYPE.AC) && (
            <Nav.Link href="/audits" data-test="header-menu-item">
              {SystemHelper.MAIN_MENU.AUDITS}
            </Nav.Link>
          )}
          {userData.entityType === SystemHelper.USER_ENTITY_TYPE.LO && (
            <Nav.Link href="/questions" data-test="header-menu-item">
              {SystemHelper.MAIN_MENU.QUESTIONS}
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </header>
  );
};
