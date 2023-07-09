function letterValue(str){
    var anum={
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    if(str.length== 1) return anum[str] || ' ';
    return str.split('').map(letterValue);
}

// letterValue('zoo') returns: (Array) [26,15,15] ;

// letterValue('z') returns: (Number) 26

// Source: https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript



// ----------------------------------------------------------------------------------------------------------------------



// The given code is a JavaScript function named `letterValue` that takes a string (`str`) as input and returns an array of numeric values corresponding to the letters in the input string. Here's a breakdown of how the code works:

// 1. The function begins by declaring a variable named `anum` and assigning it an object. This object serves as a lookup table where each lowercase letter from 'a' to 'z' is mapped to a numeric value from 1 to 26.

// 2. The function then checks the length of the input string using `str.length`. If the length is equal to 1, it means we are processing a single character. In this case, the function returns the corresponding numeric value from the `anum` object using `anum[str]`. If the character is not found in the `anum` object (i.e., it is not a lowercase letter), the function returns a space (' ').

// 3. If the length of the input string is greater than 1, it means we are processing a multi-character string. The function splits the string into an array of individual characters using `str.split('')` and then applies the `map()` method to transform each character into its corresponding numeric value.

// 4. The `map()` method is a built-in array method in JavaScript that creates a new array by executing a provided callback function on each element of the original array [1]. In this case, the `map()` method is called on the array of characters obtained from the input string.

// 5. The callback function passed to `map()` takes each character as an argument and recursively calls the `letterValue` function on that character. This recursive call allows the function to handle multi-character strings by processing each character individually and returning the corresponding numeric value. The result is an array of numeric values for each character in the input string.

// In summary, the `letterValue` function uses a lookup table (`anum`) to assign numeric values to lowercase letters. It handles both single-character strings and multi-character strings by either directly retrieving the numeric value or recursively calling itself on each character, respectively.

// References:
// [1] Array.prototype.map() - JavaScript | MDN. [[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)]