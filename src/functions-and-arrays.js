// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {

    let maxval = -1;
    var val;
    if (words.length == 0) {
        return null;
    }
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxval) {
            maxval = words[i].length;
            val = words[i];
        }

    }
    return val;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(prices) {
    let s = 0;
    for (let i = 0; i < prices.length; i++) {
        s = s + prices[i];
    }
    return s;
}

function add(prices) {
    let s = 0;
    for (let i = 0; i < prices.length; i++) {
        if (typeof(prices[i]) === "number") {
            s = s + prices[i];
        } else if (typeof(prices[i]) === "string") {
            s = s + prices[i].length;
        } else if ((prices[i]) === true) {
            s = s + 1;
        } else if (prices[i] === false) {
            s = s + 0;
        } else {
            throw new Error("Unsupported data type sir or ma'am");
        }

    }
    return s;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(arr) {
    var s = netPrice(arr);
    if (arr.length === 0) {
        return null;
    } else {
        var avg = s / arr.length;
        return avg;
    }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) {

    if (arr.length === 0) {
        return null;
    } else {
        var s = 0;
        for (let i = 0; i < arr.length; i++) {
            s = s + arr[i].length;
        }
        var avg = s / arr.length;
        return avg;
    }
}

function avg(arr) {

    if (arr.length === 0) {
        return null;
    } else {
        var s = 0;

        for (let i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) === "number") {
                s = s + arr[i];
            } else if (typeof(arr[i]) === "string") {
                s = s + arr[i].length;
            } else if ((arr[i]) === true) {
                s = s + 1;
            } else if (arr[i] === false) {
                s = s + 0;
            } else {
                throw new Error("Unsupported data type sir or ma'am");
            }

        }
        var avg = s / arr.length;
        avg = parseFloat(avg.toFixed(2));
        return avg;
    }
}

// Progression #5: Unique arrays
const wordsUnique = [
    'bread',
    'jam',
    'milk',
    'egg',
    'flour',
    'oil',
    'rice',
    'coffee powder',
    'sugar',
    'salt',
    'egg',
    'flour'
];

function uniqueArray(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, j);
                }
            }
        }
        return arr;
    }
}


// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(arr, word) {

    if (arr.length === 0) {
        return null;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === word) {
                return true;
            }
        }
        return false;
    }

}


// Progression #7: Count repetition
const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
];

function howManyTimesElementRepeated(arr, word) {
    let c = 0;
    if (arr.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === word) {
                c = c + 1;
            }
        }
        return c;
    }
}


// Progression #8: Bonus

const matrix = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {
    let srow = 0;
    let scol = 0;
    let max = -1;
    for (let i = 0; i <= (matrix.length - 4); i++) {
        srow = 0;
        scol = 0;
        for (let j = 0; j <= (matrix[i].length - 4); j++) {
            srow = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
            scol = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];

            if (srow > scol) {
                if (srow > max) {
                    max = srow;
                }
            } else {
                if (scol > max) {
                    max = scol;
                }
            }
        }

    }
    return max;

}