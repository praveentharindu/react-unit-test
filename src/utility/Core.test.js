/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import toBeType from 'jest-tobetype';

import { SystemHelper } from '../helper/SystemHelper';
import { filterCustomArray } from '../utility/Core';

expect.extend(toBeType);

const sampleLocationArray = SystemHelper.SAMPLE_LOCATION_LIST;
const sampleAttribute = 'state';
const sampleAttributeValue = 5;
const sampleResult = [
  { value: 5, label: 'Loc 3' },
  { value: 6, label: 'Loc 4' }
];

describe('starting custom array filteration', () => {
  describe('test custom array function params', () => {
    test('test first param', () => {
      expect(() => {
        filterCustomArray(null, sampleAttribute, sampleAttributeValue);
      }).toThrow();
    });

    test('test second param', () => {
      expect(() => {
        filterCustomArray(sampleLocationArray, null, sampleAttributeValue);
      }).toThrow();
    });

    test('test third param', () => {
      expect(() => {
        filterCustomArray(sampleLocationArray, sampleAttribute, null);
      }).toThrow();
    });
  });

  describe('check function parameter types', () => {
    test('test custom array filteration', () => {
      expect(sampleLocationArray).toBeType('array');
      expect(sampleAttribute).toBeType('string');
      expect(sampleAttributeValue).toBeType('number');
      const filteredDataArray = filterCustomArray(
        sampleLocationArray,
        sampleAttribute,
        sampleAttributeValue
      );
      expect(filteredDataArray).toBeType('array');
    });
  });

  describe('compare actual and retuen array contains', () => {
    test('test return array contains', () => {
      const filteredDataArray = filterCustomArray(
        sampleLocationArray,
        sampleAttribute,
        sampleAttributeValue
      );
      expect(filteredDataArray.sort()).toEqual(sampleResult.sort());
    });
  });
});
