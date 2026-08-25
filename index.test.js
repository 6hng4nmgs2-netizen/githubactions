const { sum } = require('./index');

test('Cộng 1 + 2 phải bằng 3', () => {
  expect(sum(1,2)).toBe(3);
});
