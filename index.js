/* eslint-disable */

const userName='john';  // Missing spaces, no semicolon
const userAge = 25;    // Unused variable

if (userName=='john') {  // No spaces, should use ===
  console.log('Hello '+userName);  // Inconsistent quotes, no semicolon

}

function calculateTotal(price,tax) {  // No spaces after comma
  const total = price + tax;   // var instead of let/const, no semicolon
  return total;
}
