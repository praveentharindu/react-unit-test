import React from 'react';
import { shallow } from 'enzyme';

import { Audits } from './Audits';
import { findByTestAttr } from '../../utility/TestUtility';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Audits {...setupProps} />);
};

describe('render audits main component', () => {
  test('test audits main component', () => {
    const wrapper = setup();
    const auditMainElement = findByTestAttr(wrapper, 'audits-main-component');
    expect(auditMainElement.length).toBe(1);
  });
});

describe('render audits main component title', () => {
  test('test audits main component title', () => {
    const wrapper = setup();
    const titleElement = findByTestAttr(wrapper, 'audits-title');
    expect(titleElement.length).toBe(1);
  });
});

describe('render audit create button', () => {
  test('test audit create button', () => {
    const wrapper = setup();
    const btnlement = findByTestAttr(wrapper, 'audit-create-btn');
    expect(btnlement.length).toBe(1);
  });
});
