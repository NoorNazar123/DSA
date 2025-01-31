// Function 1: Swap using a temporary variable
function swapTemp(a, b) {
    var temp = a;
    a = b;
    b = temp;
    console.log("a: ".concat(a, " and b: ").concat(b));
    return { a: a, b: b };
}
swapTemp(2, 4); // Output: a: 4 and b: 2
// Function 2: Swap using arithmetic operations
function swapArithmetic(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("a: ".concat(a, " and b: ").concat(b));
    return { a: a, b: b };
}
swapArithmetic(3, 4); // Output: a: 4 and b: 2
