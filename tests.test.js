const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher
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
})