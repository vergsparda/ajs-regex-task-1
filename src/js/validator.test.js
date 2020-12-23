import Validator from './validator';

test('not start and end with -', () => {
  const start = '-u';
  const end = 'u-';
  const expected = false;

  expect(Validator.validUsername(start)).toEqual(expected);
  expect(Validator.validUsername(end)).toEqual(expected);
});

test('not start and end with number', () => {
  const start = '3u';
  const end = 'u3';
  const expected = false;

  expect(Validator.validUsername(start)).toEqual(expected);
  expect(Validator.validUsername(end)).toEqual(expected);
});

test('not start and end with _', () => {
  const start = '_u';
  const end = 'u_';
  const expected = false;

  expect(Validator.validUsername(start)).toEqual(expected);
  expect(Validator.validUsername(end)).toEqual(expected);
});

test('start and end with letter', () => {
  const name = 'uu';
  const expected = true;

  expect(Validator.validUsername(name)).toEqual(expected);
});

test('not three numbers in a row', () => {
  const name = 'u333u';
  const expected = false;

  expect(Validator.validUsername(name)).toEqual(expected);
});

test('only -_ symbols', () => {
  const star = 'u*u';
  const dollar = 'u$u';
  const dog = 'u@u';
  const expected = false;

  expect(Validator.validUsername(star)).toEqual(expected);
  expect(Validator.validUsername(dollar)).toEqual(expected);
  expect(Validator.validUsername(dog)).toEqual(expected);
});
