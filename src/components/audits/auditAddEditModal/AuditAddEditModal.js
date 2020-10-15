import React from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import isEmpty from 'lodash/isEmpty';

import { CommonModal } from '../../../components/common/modal/CommonModal';

export const AuditAddEditModal = props => {
  const { isModalOpen, setIsModalOpen, isEditModal, setEditModal } = props;

  return (
    <CommonModal
      isModalOpen={isModalOpen}
      closeModal={e => {
        setIsModalOpen(false);
        setEditModal({});
      }}
      size="lg"
      title={!isEmpty(isEditModal) ? 'Edit Audit' : 'Add New Audit'}
    >
      <Formik
        initialValues={{
          name: !isEmpty(isEditModal) ? isEditModal.NAME : '',
          categoryId: !isEmpty(isEditModal) ? isEditModal.ID : ''
        }}
        onSubmit={(values, actions) => {
          if (!isEmpty(isEditModal)) {
          } else {
          }
          setIsModalOpen(false);
          setEditModal({});
        }}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .max(25, 'Make the audit name 25 characters or less')
            .matches(/\S/, 'Please add a audit name')
            .required('Please add a audit name')
        })}
        render={props => (
          <Form onSubmit={props.handleSubmit}>
            <div className="form-body">
              <div className="form-group">
                <label htmlFor="name">
                  Audit Name <span className="required">*</span>
                </label>
                <Field
                  type="text"
                  autoComplete="off"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                  placeholder="Audit Name"
                  className="form-control"
                />
                <div className="error-message">
                  <ErrorMessage name="name" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="modal-footer">
                <Button
                  variant="outline-light"
                  className="popup-btn "
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditModal({});
                  }}
                >
                  Cancel
                </Button>
                <Button className="popup-btn" type="submit">
                  {!isEmpty(isEditModal) ? 'Update' : 'Save'}
                </Button>
              </div>
            </div>
          </Form>
        )}
      />
    </CommonModal>
  );
};
