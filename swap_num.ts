interface Numbers {
    a: number;
    b: number;
}

// Function 1: Swap using a temporary variable
function swapTemp(a: number, b: number): Numbers {
    let temp = a;
    a = b;
    b = temp;
    console.log(`a: ${a} and b: ${b}`);
    return { a, b };
}

swapTemp(2, 4); // Output: a: 4 and b: 2

// Function 2: Swap using arithmetic operations
function swapArithmetic(a: number, b: number): Numbers {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`a: ${a} and b: ${b}`);
    return { a, b };
}

swapArithmetic(3, 4); // Output: a: 4 and b: 2