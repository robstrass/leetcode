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

console.log(solution([1, 2, 1, 3, 4])) // [1, 1, 0]
