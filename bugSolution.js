function foo(a, b) {
  if (b === 0) {
    return a;
  } else if (a === b) {
    return true;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // this works fine 
console.log(foo(10, 0)); // this now works correctly