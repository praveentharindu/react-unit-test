import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';
import { SystemHelper } from '../../../helper/SystemHelper';
import { findByTestAttr } from '../../../utility/TestUtility';

const LO_USER_ID = 2000;
const LO_COMPANY_NAME = 'LO Test';
const LO_ENTITY_TYPE = SystemHelper.USER_ENTITY_TYPE.LO;

const AC_USER_ID = 2002;
const AC_COMPANY_NAME = 'AC Test';
const AC_ENTITY_TYPE = SystemHelper.USER_ENTITY_TYPE.AC;

const loUserData = {
  userData: {
    userId: LO_USER_ID,
    companyName: LO_COMPANY_NAME,
    entityType: LO_ENTITY_TYPE
  }
};

const acUserData = {
  userData: {
    userId: AC_USER_ID,
    companyName: AC_COMPANY_NAME,
    entityType: AC_ENTITY_TYPE
  }
};

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Header {...setupProps} />);
};

describe('render header menu component', () => {
  test('test header menu component', () => {
    const wrapper = setup(loUserData);
    const headerElement = findByTestAttr(wrapper, 'header-component');
    expect(headerElement.length).toBe(1);
  });
});

describe('render header menu items', () => {
  test('for lo users', () => {
    const wrapper = setup(loUserData);
    const headerElement = findByTestAttr(wrapper, 'header-menu-item');
    expect(headerElement.length).toBe(2);
  });

  test('for ac users', () => {
    const wrapper = setup(acUserData);
    const headerElement = findByTestAttr(wrapper, 'header-menu-item');
    expect(headerElement.length).toBe(1);
  });
});
