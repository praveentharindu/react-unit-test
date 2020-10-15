/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable no-template-curly-in-string */
import { checkPropTypes } from 'prop-types';

/**
 * @function findByTestAttr
 * @param {*} wrapper
 * @param {*} val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

/**
 * @function checkProps
 * @param {*} component
 * @param {*} confirmingProps
 */
export const checkProps = (component, confirmingProps) => {
  const propError =
    checkPropTypes[
      (component.propTypes, confirmingProps, 'prop', component.name)
    ];
  expect(propError).toBeUndefined();
};
