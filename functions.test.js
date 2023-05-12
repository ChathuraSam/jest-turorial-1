const functions = require('./functions');
test('add 2 + 2', ()=> {
  expect(functions.add(2,2)).toBe(5);
});