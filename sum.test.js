// suma.test.js
import sumar from './sum';

test('suma 2 + 3 debería ser 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('suma -1 + 1 debería ser 0', () => {
  expect(sumar(-1, 1)).toBe(0);
});