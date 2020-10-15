import React from 'react';
import { Table, Button } from 'react-bootstrap';
import size from 'lodash/size';
import * as PropTypes from 'prop-types';

export const AuditTable = props => {
  const { setIsModalOpen, setEditModal, tableData } = props;

  return (
    <Table
      striped
      bordered
      hover
      className="mt-10 new-table table simplifyaTable auditTemplateTable"
      data-test="audit-table-component"
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(tableRow => {
          return (
            <tr data-test="audit-table-row" key={tableRow.ID}>
              <td>{tableRow.ID}</td>
              <td>{tableRow.NAME}</td>
              <td>{tableRow.CREATED_DATE}</td>
              <td>
                <Button
                  data-test={`audit-row-edit-${tableRow.ID}`}
                  className="actionMenu-btn action btn-sm btn-default"
                  role="button"
                  onClick={() => {
                    setIsModalOpen(true);
                    setEditModal(tableRow);
                  }}
                >
                  Edit
                </Button>
              </td>
            </tr>
          );
        })}
        {size(tableData) === 0 && (
          <tr data-test="audit-table-no-data-message">
            <td colSpan="4">No Data Found</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

AuditTable.propTypes = {
  setIsModalOpen: PropTypes.func,
  setEditModal: PropTypes.func,
  tableData: PropTypes.array
};
