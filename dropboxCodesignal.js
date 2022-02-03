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

console.log(subArr([9, 8, 7, 6, 5])) // 15
console.log(subArr([10, 10, 10])) // 3
