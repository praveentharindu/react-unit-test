/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import isEmpty from 'lodash/isEmpty';

import { CommonModal } from '../../components/common/modal/CommonModal';
import { AuditTable } from '../../components/audits/auditTable/AuditTable';
import { AuditAddEditModal } from '../../components/audits/auditAddEditModal/AuditAddEditModal';
import { SystemHelper } from '../../helper/SystemHelper';
import { filterCustomArray } from '../../utility/Core';

import './Audit.css';

export const Audits = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModal, setEditModal] = useState({});
  const [filteredLocations, setFilteredLocations] = useState([]);

  const allLocationList = SystemHelper.SAMPLE_LOCATION_LIST;
  const filterAttribute = 'state';
  const filterAttributeVal = 5;

  useEffect(() => {
    setFilteredLocations(
      filterCustomArray(allLocationList, filterAttribute, filterAttributeVal)
    );
  }, [allLocationList]);

  return (
    <Container fluid className="main-wrap" data-test="audits-main-component">
      <div className="content-wrapper">
        <main>
          <div className="panel-body">
            <div className="align-items-center row">
              <div className="col-md-6">
                <h2 className="page-title  font_24" data-test="audits-title">
                  Audits
                </h2>
              </div>
              <div className="text-right d-flex align-items-center justify-content-end csa_btn_wrp col-md-6">
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={() => setIsModalOpen(true)}
                  data-test="audit-create-btn"
                >
                  Create Self-Audit
                </button>
              </div>
            </div>
            <div className="dataTables_wrapper overflow_remove">
              <AuditTable
                setIsModalOpen={setIsModalOpen}
                setEditModal={setEditModal}
                tableData={SystemHelper.SAMPLE_AUDIT_TABLE_DATA}
              />
            </div>
          </div>
        </main>
      </div>

      {isModalOpen && (
        <AuditAddEditModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isEditModal={isEditModal}
          setEditModal={setEditModal}
        />
      )}
    </Container>
  );
};
