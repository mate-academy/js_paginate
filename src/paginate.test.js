'use strict';

const elements = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const paginate = require('./paginate');

test('Should return 6..10 items', () => {
  expect(paginate({ items: elements, perPage: 5, currentPage: 1 }))
    .toEqual([11, 12, 13, 14, 15]);
});

test('Should return an empty array', () => {
  expect(paginate({ items: [], perPage: 5, currentPage: 2 }))
    .toEqual([]);
});

test('Should return 19 and 20 items', () => {
  expect(paginate({ items: elements, perPage: 2, currentPage: 5 }))
    .toEqual([19, 20]);
});

test('Should return empty array if currentPage is invalid', () => {
  expect(paginate({ items: elements, perPage: 2, currentPage: 6 }))
    .toEqual([]);
});
