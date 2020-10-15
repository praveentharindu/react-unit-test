/* eslint-disable import/no-unresolved */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-handler-names */
import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import './Modal.css';

export const CommonModalWithoutOverlay = props => {
  const { title, body, visible, size, className } = props;
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Modal
      dialogClassName={className}
      show={isModalOpen}
      onHide={props.closeModal}
      size={size}
      backdropClassName="pdf_modal_bg"
      backdrop="static"
    >
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

CommonModalWithoutOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node,
  visible: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired
};

CommonModalWithoutOverlay.defaultProps = {
  title: 'Title',
  body: '<p> Test Body </p>',
  visible: true,
  size: 'sm'
};
