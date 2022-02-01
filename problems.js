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
