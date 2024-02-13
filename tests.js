function capitalize(string)
{
    const forcedString = String(string);
    const capFirstLetter = forcedString[0].toUpperCase();
    const newString = [capFirstLetter];
    for (let i = 1; i < forcedString.length; i++)
    {
        newString.push(forcedString[i]);
    }
    
    const reformedString = newString.join('');

    return reformedString;

}

function reverseString(string)
{
    const forcedString = String(string);
    const reversedString = [];

    for (let i = 0; i < forcedString.length; i++)
    {
        reversedString.unshift(forcedString[i]);
    }

    const reformedString = reversedString.join('');

    return reformedString;

}

const calculator = {

    add(num1, num2)
    {
        return num1 + num2;
    },
    
    subtract(num1, num2)
    {
        return num1 - num2;
    },

    divide(num1, num2)
    {
        return num1 / num2;
    },

    multiply(num1, num2)
    {
        return num1 * num2;
    }
    
}


module.exports = 
    {
        capitalize,
        reverseString,
        calculator
    };