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

function caesarCipher(string, shiftFactor)
{
    const forcedString = String(string);
    const plainAlphabet = 
    [
        'a','b','c','d',
        'e','f','g','h',
        'i','j','k','l',
        'm','n','o','p',
        'q','r','s','t',
        'u','v','w','x',
        'y','z'
    ]


    const arrayOfPositions = [];

    function getStringLetterPositions()
    {
        
        for (let i = 0; i < forcedString.length; i++)
        {
            const searchForChar = forcedString[i];
            const posInPlainAlphabet = plainAlphabet.indexOf(searchForChar);
            arrayOfPositions.push(posInPlainAlphabet);


        }
    }
    
    const shiftedAlphabet = [];

    function shiftAlphabet(shiftFactor)
    {
        

        for (let i = 0; i < plainAlphabet.length; i++)
        {

                if ( i < shiftFactor)
                {
                    shiftedAlphabet.push(plainAlphabet[plainAlphabet[[0]] + (shiftFactor - i)]);
                }
        
                if ( i >= shiftFactor)
                {
                    shiftedAlphabet.push(plainAlphabet[i + shiftFactor]);
                }
    
            
            

        }

        
    }

    shiftAlphabet(shiftFactor);
    console.log("Shifted: ", shiftedAlphabet);

    getStringLetterPositions();
    const cipheredString = [];

    function assembleCipher()
    {
        for (let i = 0; i < arrayOfPositions.length; i++)
        {
            cipheredString.push(shiftedAlphabet[arrayOfPositions[i]]);
        }
    }

    assembleCipher();
    return cipheredString.join("");

}


module.exports = 
    {
        capitalize,
        reverseString,
        calculator,
        caesarCipher
    };