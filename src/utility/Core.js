/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable no-template-curly-in-string */
import isArray from 'lodash/isArray';
import isNull from 'lodash/isNull';

import { SystemHelper } from '../helper/SystemHelper';
/**
 *
 * @param {*} array
 * @param {*} attribute
 * @param {*} attributeVal
 */
export const filterCustomArray = (array, attribute, attributeVal) => {
  let filteredArray = [];
  if (!isArray(array) || isNull(attribute) || isNull(attributeVal)) {
    throw new Error(SystemHelper.ERROR_INVALID_PARAMETERS);
  } else {
    filteredArray = array
      .filter(option => option[attribute] === attributeVal)
      .map(function(option) {
        return { value: option.id, label: option.name };
      });
    return filteredArray;
  }
};
