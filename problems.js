// climbStairs
let memo = {}
var climbStairs = function(n) {
    if (n === 0) return 1;
    if (!memo[n - 1]) memo[n - 1] = climbStairs(n - 1)
    return memo[n - 1] + (memo[n - 2] || 0)
};

// var climbStairs = function(n, memo = {}) {
//     if (n in memo) return memo[n];
//     if (n === 0) return 1;
//     if ( n < 0) return 0;
//     return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
// };


// contains duplicate
var containsDuplicate = function(nums) {
    let setter = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!setter.has(nums[i])) {
            setter.add(nums[i])
        } else {
            return true;
        }
    }
    return false;
};

// countBits
var countBits = function(n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
        let count = 0;
        let bin = i.toString(2);
        for (let j = 0; j < bin.length; j++) {
            if (bin[j] == 1) count++
        }
        arr.push(count);
        count = 0;
    }
    return arr;
};
