// zig zag
function solution(numbers) {
    const sol = [];
    for (let i = 0; i < numbers.length; i++) {
        let left = numbers[i];
        let middle = numbers[i + 1];
        let right = numbers[i + 2];

        if (right) {
            if ((left > middle && middle < right) || (left < middle && middle > right)) {
                sol.push(1)
            } else {
                sol.push(0)
            }
        }
    }
    return sol
}

// console.log(solution([1, 2, 1, 3, 4])) // [1, 1, 0]

function stringSol(string) {
    if (string.length < 4) return 0;

    let count = 0;

    for(let i = 0; i < string.length; i++) {

    }

    return count;
}

// console.log(stringSol('xzxzx')) // 5

// construct a string from words in arr
function strArr(arr) {
    let str = '';

    for (let i = 0; i < arr.length; i++) {

    }
    return str
}

// console.log(strArr(['Daisy', 'Rose', 'Hyacinth', 'Poppy'])) // 'DRHPaoyoisapsecpyiynth'


// contiguous subarrays
function subArr(arr) {
    if (arr === []) return 0;

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];

        let j = arr[i + 1];
        while (j < arr[j - 1]) {
            count++
        }
    }
    return count;
}

// console.log(subArr([9, 8, 7, 6, 5])) // 15
// console.log(subArr([10, 10, 10])) // 3


// Second Coding Challenge

let queries = [
    ["APPEND", "Hey"],               //| "" -> "Hey"
    ["APPEND", " there"],            //| "Hey" -> "Hey there"
    ["APPEND", "!"]                  //| "Hey there" -> "Hey there!"
]
// returns: [ "Hey",
//            "Hey there",
//            "Hey there!" ]

let queries2 = [
    ["APPEND", "Hey you"],           //| "" -> "Hey you"
    ["MOVE", "3"],                   //| moves the cursor after the first "y"
    ["APPEND", ","]                  //| "Hey you" -> "Hey, you"
]

// returns: [ "Hey you",
//            "Hey you",
//            "Hey, you" ]

let queries3 = [
    ["APPEND", "Hello! world!"],      //| "" -> "Hello! world!"
    ["MOVE", "5"],                   //| moves the cursor before the first "!"
    ["DELETE"],                      //| "Hello! world!" -> "Hello world!"
    ["APPEND", ","]                  //| "Hello world!" -> "Hello, world!"
]

// returns: [ "Hello! world!",
//            "Hello! world!",
//            "Hello world!",
//            "Hello, world!" ]

let queries4 = [
    ["APPEND", "!"],                 //| "" -> "!"
    ["DELETE"]                       //| "!" -> "!"
    ["MOVE", "0"],                   //| moves the cursor before the first symbol
    ["DELETE"]                       //| "!" -> ""
    ["DELETE"]                       //| "" -> ""
]

// returns: [ "!",
//            "",
//            "",
//            "",
//            "" ]
let queries5 = [
    ["APPEND", "Hello cruel world!"],  //| "" -> "Hello cruel world!"
    ["SELECT", "5", "11"],             //| selects " cruel"
    ["APPEND", ","]                    //| "Hello cruel world!" -> "Hello, world!"
]

// returns: [ "Hello cruel world!",
//            "Hello cruel world!",
//            "Hello, world!" ]
function textEditor(arr) {
    let lastItem = '';
    let position = 0;
    let sol = [];

    for (let i = 0; i < arr.length; i++) {
        let subArr = arr[i];
        console.log('subArr', subArr)
        console.log('sol', sol)
        console.log('position', position)
        if (subArr[0] === 'APPEND') {
            console.log('append', i);
            if (position === 0) {
                lastItem = lastItem + subArr[1];
                sol.push(lastItem);
            } else {
                const lastItemArr = lastItem.split('');
                lastItemArr.splice(position, 0, subArr[1]);
                lastItem = lastItemArr.join('');
                sol.push(lastItem);
            }
        }
        if (subArr[0] === 'MOVE') {
            console.log('move', i)
            position += subArr[1];
            sol.push(lastItem);
        }
        if (subArr[0] === 'DELETE') {
            console.log('delete', i)
            const lastItemArr = lastItem.split('');
            lastItemArr.splice(position, 1);
            lastItem = lastItemArr.join('');
            console.log('lastItem', lastItem)
            sol.push(lastItem);
        }
        if (subArr[0] === 'SELECT') {
            console.log('select', i)
            sol.push(lastItem);
            const lastItemArr = lastItem.split('');
            lastItemArr.splice(subArr[1], subArr[2] - subArr[1]);
            position = subArr[1];
            lastItem = lastItemArr.join('');
        }
    }

    return sol;
}

// console.log(textEditor(queries));
// console.log(textEditor(queries2));
// console.log(textEditor(queries3));
// console.log(textEditor(queries4));
console.log(textEditor(queries5));
