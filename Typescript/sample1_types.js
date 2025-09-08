var someInfo = 34;
// console.log(someInfo);
function addNumbers(a, b, c) {
    if (c === void 0) { c = 20; }
    return a + b + c;
}
var results = addNumbers(2, 3, 100);
console.log(results);
