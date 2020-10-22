/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable no-template-curly-in-string */

/**
 *
 * @param {*} array
 * @param {*} attribute
 * @param {*} attributeVal
 */
export const filterCustomArray = (array, attribute, attributeVal) => {
  let filteredArray = [];
  if (array && attribute) {
    filteredArray = array
      .filter(option => option[attribute] === attributeVal)
      .map(function(option) {
        return { value: option.id, label: option.name };
      });
  }

  return filteredArray;
};
