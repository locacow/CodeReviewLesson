import test from 'node:test';
import assert from 'node:assert';
import { calculateAreaFixed } from './AreaCalc.js';

test('Correct rectangle area 10*4 = 40', (t) => {
  assert.strictEqual(calculateAreaFixed(10,4), 40);
});
//
// test('Test throws error for negative values -3*3', (t) => {
//   assert.throws(() => {
//     calculateAreaFixed(-3,3);
//   }, {
//     name: 'Error',
//     message: 'Length and width must be positive numbers'
//   });});
//
// test('Test throws error for non numerical values a*3', (t) => {
//   assert.throws(() => {
//     calculateAreaFixed('a',3);
//   }, {
//     name: 'Error',
//     message: 'Length and width must be positive numbers'
//   });});
//
