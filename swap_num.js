//fix by object return
function swapnumberbytemp(a, b) {
    var temp = a;
    a = b;
    b = temp;
    console.log("a: ".concat(a, " and b: ").concat(b));
    return { a: a, b: b };
}
swapnumberbytemp(2, 4);
//fix by array object return
function swapnumber(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("a: ".concat(a, " and b: ").concat(b));
    return [{ a: a, b: b }];
}
swapnumber(2, 4);
