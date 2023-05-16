const reverseString = require('./reverseString');

test('reverse string function exist', () => {
  expect(reverseString).toBeDefined();
});

test('String revers hello', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

