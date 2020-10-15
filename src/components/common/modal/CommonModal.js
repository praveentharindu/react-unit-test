/* eslint-disable import/no-unresolved */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-handler-names */
import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import './Modal.css';

export const CommonModal = props => {
  const { title, body, visible, size, className } = props;
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Modal
      dialogClassName={className}
      show={isModalOpen}
      onHide={props.closeModal}
      size={size}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

CommonModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node,
  visible: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired
};

CommonModal.defaultProps = {
  title: 'Title',
  body: '<p> Test Body </p>',
  visible: true,
  size: 'sm'
};
