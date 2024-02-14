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

function caesarCipher(string, shiftFactor, decrypt = false)
{

    const forcedString = String(string).toLowerCase(); // Ensure string is a lower case string
    const plainAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); // Simplified way to create the alphabet array


    //Adjust shift factor for decryption
    if (decrypt)
    {
        shiftFactor = 26 - (shiftFactor % 26);
    }

    const shiftedAlphabet = plainAlphabet.map((char, index) =>
    {
        // Calculate new position for each character, with wrap around
        const shiftedIndex = (index + shiftFactor) % plainAlphabet.length;
        return plainAlphabet[shiftedIndex];
    });

    // Transform the input string according to the shifted alphabet
    let result = '';
    for (let char of forcedString)
    {
        const index = plainAlphabet.indexOf(char);
        if (index === -1)
        {
            // Character not in alphabet (e.g., spaces, puunctuation), add as is
            result += char;
        }
        else
        {
            //Substitute char from the shifted alphabet
            result += shiftedAlphabet[index];
        }
    }

    return result;
}

function analyzeArray(arrayOfNumbers)
{

    class Object{

        constructor()
        {
            average: 0;
            min: 0;
            max: 0;
            length: 0;
        }
       
    };

    const newObject = new Object();

    function analyse(array)
    {

        function getAverage()
        {
            let total = 0;

            for (let i = 0; i < array.length; i++)
            {
                total += array[i];
            }

            const average = total / array.length;
            return average;
        }

        function getMin()
        {
            return Math.min(...array);
        }

        function getMax()
        {
            return Math.max(...array);
        }

        function getLength()
        {
            return array.length;
        }

        newObject.average = getAverage();
        newObject.min = getMin();
        newObject.max = getMax();
        newObject.length = getLength();
    }

    analyse(arrayOfNumbers);

    return newObject;

    

}

module.exports = 
    {
        capitalize,
        reverseString,
        calculator,
        caesarCipher,
        analyzeArray
    };