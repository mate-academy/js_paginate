'use strict';

const getPages = require('./get-pages');

test('Should return 5 pages', () => {
  expect(getPages({ totalCount: 42, perPage: 10 }))
    .toEqual([1, 2, 3, 4, 5]);
});

test('Should return 1 page', () => {
  expect(getPages({ totalCount: 3, perPage: 10 }))
    .toEqual([1]);
});

test('Should return empty array', () => {
  expect(getPages({ totalCount: 0, perPage: 10 }))
    .toEqual([]);
});

test('Should return 3 pages', () => {
  expect(getPages({ totalCount: 29, perPage: 10 }))
    .toEqual([1, 2, 3]);
});

test('Should return array with 5 elements', () => {
  expect(getPages({ totalCount: 91, perPage: 10 }))
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
