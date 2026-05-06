// unit.test.js

import * as functions from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber: "(123) 456-7890" is a valid phone number', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: "123-456-7890" is a valid phone number', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber: "abc-def-ghij" is not a valid phone number', () => {
  expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('isPhoneNumber: "12-34-5678" is not a valid phone number', () => {
  expect(functions.isPhoneNumber('12-34-5678')).toBe(false);
});

// isEmail
test('isEmail: "hello@example.com" is a valid email', () => {
  expect(functions.isEmail('hello@example.com')).toBe(true);
});

test('isEmail: "user@domain.io" is a valid email', () => {
  expect(functions.isEmail('user@domain.io')).toBe(true);
});

test('isEmail: "not-an-email" is not a valid email', () => {
  expect(functions.isEmail('not-an-email')).toBe(false);
});

test('isEmail: "missing@domain" is not a valid email', () => {
  expect(functions.isEmail('missing@domain')).toBe(false);
});

// isStrongPassword
test('isStrongPassword: "Abcd" is a strong password', () => {
  expect(functions.isStrongPassword('Abcd')).toBe(true);
});

test('isStrongPassword: "Password_123" is a strong password', () => {
  expect(functions.isStrongPassword('Password_123')).toBe(true);
});

test('isStrongPassword: "1bcd" is not a strong password (must start with a letter)', () => {
  expect(functions.isStrongPassword('1bcd')).toBe(false);
});

test('isStrongPassword: "ab" is not a strong password (too short)', () => {
  expect(functions.isStrongPassword('ab')).toBe(false);
});

// isDate
test('isDate: "1/1/2024" is a valid date', () => {
  expect(functions.isDate('1/1/2024')).toBe(true);
});

test('isDate: "12/25/2025" is a valid date', () => {
  expect(functions.isDate('12/25/2025')).toBe(true);
});

test('isDate: "1-1-2024" is not a valid date', () => {
  expect(functions.isDate('1-1-2024')).toBe(false);
});

test('isDate: "1/1/24" is not a valid date (year must be 4 digits)', () => {
  expect(functions.isDate('1/1/24')).toBe(false);
});

// isHexColor
test('isHexColor: "#fff" is a valid hex color', () => {
  expect(functions.isHexColor('#fff')).toBe(true);
});

test('isHexColor: "#A1B2C3" is a valid hex color', () => {
  expect(functions.isHexColor('#A1B2C3')).toBe(true);
});

test('isHexColor: "#ZZZ" is not a valid hex color', () => {
  expect(functions.isHexColor('#ZZZ')).toBe(false);
});

test('isHexColor: "#12345" is not a valid hex color (must be 3 or 6 chars)', () => {
  expect(functions.isHexColor('#12345')).toBe(false);
});
