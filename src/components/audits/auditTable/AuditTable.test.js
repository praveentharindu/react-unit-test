/* eslint-disable no-unused-vars */
import React from 'react';
import { mount, shallow } from 'enzyme';

import { AuditTable } from './AuditTable';
import { findByTestAttr, checkProps } from '../../../utility/TestUtility';
import { SystemHelper } from '../../../helper/SystemHelper';

const setIsModalOpen = jest.fn();
const setEditModal = jest.fn();
const tableData = [];

const defaultProps = {
  setIsModalOpen: setIsModalOpen,
  setEditModal: setEditModal,
  tableData: tableData
};

const defaultPropsForAvailableData = {
  ...defaultProps,
  tableData: SystemHelper.SAMPLE_AUDIT_TABLE_DATA
};

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<AuditTable {...setupProps} />);
};

describe('validate props types', () => {
  test('test validate audit table props types', () => {
    checkProps(AuditTable, defaultProps);
  });
});

describe('render audit table component', () => {
  test('test audit table component', () => {
    const wrapper = setup(defaultProps);
    const auditTableElement = findByTestAttr(wrapper, 'audit-table-component');
    expect(auditTableElement.length).toBe(1);
  });
});

describe('render audit table', () => {
  describe('for empty data', () => {
    describe('rendering tests', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = setup(defaultProps);
      });
      test('default data empty message should be shown', () => {
        const emptyMessageElement = findByTestAttr(
          wrapper,
          'audit-table-no-data-message'
        );
        expect(emptyMessageElement.length).toBe(1);
      });
      test('table rows should not be shown', () => {
        const rowRecords = findByTestAttr(wrapper, 'audit-table-row');
        expect(rowRecords.length).toBe(0);
      });
    });
  });

  describe('for available data', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(defaultPropsForAvailableData);
    });
    describe('rendering tests', () => {
      test('default data empty message should not be shown', () => {
        const emptyMessageElement = findByTestAttr(
          wrapper,
          'audit-table-no-data-message'
        );
        expect(emptyMessageElement.length).toBe(0);
      });
      test('table rows should be shown', () => {
        const rowRecords = findByTestAttr(wrapper, 'audit-table-row');
        expect(rowRecords.length).toBeGreaterThan(0);
      });
    });
    describe('function call tests', () => {
      test('function should be called for edit modal action', () => {
        defaultPropsForAvailableData.setEditModal.mockClear();
        const editAction = findByTestAttr(wrapper, 'audit-row-edit-1');
        editAction.find('Button').simulate('click');
        expect(defaultPropsForAvailableData.setEditModal).toHaveBeenCalled();
      });
    });
  });
});
