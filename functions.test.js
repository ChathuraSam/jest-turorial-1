const functions = require("./functions");

test("adds 1 + 2 to equal 3", () => {
  expect(functions.add(1, 2)).toBe(3);
});

test("adds 1 + 2 not equal 5", () => {
  expect(functions.add(1, 2)).not.toBe(5);
});

/**
 * TRUTHY values
 * 
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false
 */

test("shoud be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toBe is for primitive types. Because it is reference type. For objects you have to use toEqual
test("user should be Chathura Samarajeewa object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Chathura",
    lastName: "Samarajeewa",
  });
});

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regular expressions
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);

});

// Arrays
test('admin should be in the list', () => {
  const usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// working woth async data
test('user fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  try {
    const data = await functions.fetchUsers();
    expect(data.name).toEqual('Leanne Graham');
  } catch (e) {
    expect(e).toMatch('error');
  }
});
