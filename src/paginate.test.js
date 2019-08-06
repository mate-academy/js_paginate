'use strict';

const todos = [
  { id: 1, title: 'todo 1' },
  { id: 2, title: 'todo 2' },
  { id: 3, title: 'todo 3' },
  { id: 4, title: 'todo 4' },
  { id: 5, title: 'todo 5' },
  { id: 6, title: 'todo 6' },
  { id: 7, title: 'todo 7' },
  { id: 8, title: 'todo 8' },
  { id: 9, title: 'todo 9' },
  { id: 10, title: 'todo 10' },
  { id: 11, title: 'todo 11' },
  { id: 12, title: 'todo 12' },
  { id: 13, title: 'todo 13' },
  { id: 14, title: 'todo 14' },
  { id: 15, title: 'todo 15' },
  { id: 16, title: 'todo 16' },
  { id: 17, title: 'todo 17' },
  { id: 18, title: 'todo 18' },
  { id: 19, title: 'todo 19' },
  { id: 20, title: 'todo 20' },
];

const paginate = require('./paginate');

test('Should return items from 6 to 10', () => {
  expect(paginate({ items: todos, perPage: 5, currentPage: 2 })).toEqual(
    todos.slice(5, 10)
  );
});

test('Should return an empty array', () => {
  expect(paginate({ items: [], perPage: 5, currentPage: 2 })).toEqual(
    []
  );
});

test('Should return items from 7 to 14', () => {
  expect(paginate({ items: todos, perPage: 10, currentPage: 2 })).toEqual(
    todos.slice(10, 20)
  );
});
