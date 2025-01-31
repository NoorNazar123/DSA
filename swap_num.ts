interface Numbers {
    a: number,
    b: number,
}
//fix by object return

function swapnumberbytemp(a: number, b: number): Numbers {
    let temp = a;
    a = b;
    b = temp;
    console.log(`a: ${a} and b: ${b}`);
    return { a, b }
}
swapnumberbytemp(2, 4);

//fix by array object return
function swapnumber(a: number, b: number): Numbers[] {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`a: ${a} and b: ${b}`);
    return [{ a, b }]
}
swapnumber(2, 4);