# Infinite Recursion in JavaScript GCD Function

This repository demonstrates a common error in JavaScript: infinite recursion.  The `foo` function calculates the greatest common divisor (GCD) of two numbers using Euclid's algorithm. However, a missing base case for when `b` is 0 leads to an infinite recursive call stack and a stack overflow error.

The `bug.js` file contains the flawed function. The `bugSolution.js` provides a corrected version that handles the base case properly.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run it in a JavaScript environment (like a browser's console or Node.js).
3. Observe the stack overflow error when calling `foo(10, 0)`.
4. Compare with the corrected version in `bugSolution.js`.