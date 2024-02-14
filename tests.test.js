const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} = require('./tests');

test('Capitalises the first letter', () =>
{
    expect(capitalize('brilliant')).toBe('Brilliant');
}
);

const reverse = require('./tests')

test('Reverse a string', () =>
{
    expect(reverseString('brilliant')).toBe('tnaillirb');
}
);

test('Basic calculator', () =>
{
    expect(calculator.add(1,2)).toBe(3);

    expect(calculator.subtract(2,1)).toBe(1);

    expect(calculator.divide(4,2)).toBe(2);

    expect(calculator.multiply(3,5)).toBe(15);
}
);

test("Apply Caser Cipher" , () =>
{
    expect(caesarCipher('julius', 3)).toBe('mxolxv');
    expect(caesarCipher('julius.', -3)).toBe('grifrp.');
})

test("Analyze Array, return object with properties" , () =>
{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        { average: 4, min: 1, max: 8, length: 6 }
    );
})