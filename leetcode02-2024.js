// EASY

// 1768. Merge Strings Alternately
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let str = "";
  const max = Math.max(word1.length, word2.length);

  for (let i = 0; i < max; i++) {
    if (word1[i]) str += word1[i];
    if (word2[i]) str += word2[i];
  }

  return str;
};

// 1071. Greatest Common Divisor of Strings
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  const min = Math.min(str1.length, str2.length);

  for (let l = min; l > 0; l--) {
    if (str1.length % l === 0 && str2.length % l === 0) {
      return str1.substring(0, l);
    }
  }
};

// 1431. Kids With the Greatest Number of Candies
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let highest = Math.max(...candies);
  const result = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= highest) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

// 605. Can Place Flowers
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i += 2) {
    if (flowerbed[i] === 0) {
      if (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) {
        count++;
      } else {
        i++;
      }
    }
  }

  return count >= n;
};

// 345. Reverse Vowels of a String
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  let l = 0;
  let r = s.length - 1;
  const arr = s.split("");

  while (l < r) {
    while (l < r && !vowels.includes(arr[l])) {
      l++;
    }

    while (l < r && !vowels.includes(arr[r])) {
      r--;
    }

    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }

  return arr.join("");
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  let l = 0;
  let r = s.length - 1;
  const arr = s.split("");

  while (l < r) {
    if (!vowels.includes(arr[l])) {
      l++;
    }
    if (!vowels.includes(arr[r])) {
      r--;
    }

    if (vowels.includes(arr[l]) && vowels.includes(arr[r])) {
      const curr = arr[l];
      arr[l] = arr[r];
      arr[r] = curr;
      l++;
      r--;
    }
  }

  return arr.join("");
};

// 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let low = 0;
  let high = 1;

  while (high <= nums.length - 1) {
    if (nums[low] !== 0) {
      low++;
      high++;
    } else {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
      }
      high++;
    }
  }
};

// 392. Is Subsequence
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i === s.length;
};

// 643. Maximum Average Subarray I
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  max = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum);
  }

  return max / k;
};

// 1732. Find the Highest Altitude
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let alt = 0;
  let max = 0;

  for (let i = 0; i < gain.length; i++) {
    alt += gain[i];
    max = Math.max(max, alt);
  }

  return max;
};

// 724. Find Pivot Index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = 0;
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) total += nums[i];

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === total - nums[i] - leftSum) return i;
    leftSum += nums[i];
  }

  return -1;
};

// 2215. Find the Difference of Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const ans1 = [];
  const ans2 = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  set1.forEach(num => {
    if (!set2.has(num)) ans1.push(num);
  });
  set2.forEach(num => {
    if (!set1.has(num)) ans2.push(num);
  });

  return [ans1, ans2];
};

// 1207. Unique Number of Occurrences
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const obj = {};
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num in obj) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  for (const key in obj) {
    if (set.has(obj[key])) {
      return false;
    } else {
      set.add(obj[key]);
    }
  }

  return true;
};

// 933. Number of Recent Calls
var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);

  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }

  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// 206. Reverse Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

// 1137. N-th Tribonacci Number
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n, hash = {}) {
  if (n === 0) return 0;
  if (n < 3) return 1;

  if (hash[n] !== undefined) return hash[n];

  hash[n] =
    tribonacci(n - 1, hash) + tribonacci(n - 2, hash) + tribonacci(n - 3, hash);
  return hash[n];
};

// 746. Min Cost Climbing Stairs
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  for (let i = cost.length - 3; i >= 0; i--) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }

  return Math.min(cost[0], cost[1]);
};

// 104. Maximum Depth of Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 872. Leaf-Similar Trees
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  function findLeaves(root, leaves) {
    if (!root) return;
    if (!root.left && !root.right) {
      leaves.push(root.val);
    }

    findLeaves(root.left, leaves);
    findLeaves(root.right, leaves);
  }

  let leaves1 = [];
  let leaves2 = [];
  findLeaves(root1, leaves1);
  findLeaves(root2, leaves2);

  return leaves1.toString() === leaves2.toString();
};

/*










*/

// MEDIUM

// 151. Reverse Words in a String
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const res = [];
  const arr = s.split(" ");

  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i] !== "") {
      res.push(arr[i]);
    }
  }

  return res.join(" ");
};

// 238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = left;
    left *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
};

// 334. Increasing Triplet Subsequence
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < first) {
      first = nums[i];
    }

    if (nums[i] < second && nums[i] > first) {
      second = nums[i];
    }

    if (nums[i] > second) {
      return true;
    }
  }

  return false;
};

// 443. String Compression
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let j = 0;
  let curr = chars[0];
  let counter = 0;

  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === curr) {
      counter++;
    } else {
      chars[j] = curr;
      if (counter > 1) {
        const s = counter.toString();
        for (let k = 0; k < s.length; k++) chars[++j] = s[k];
      }
      j++;
      curr = chars[i];
      counter = 1;
    }
  }

  return j;
};

// 11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let res = -Infinity;

  while (l < r) {
    const min = Math.min(height[l], height[r]);
    const distance = r - l;
    if (min * distance > res) {
      res = min * distance;
    }

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return res;
};

// 1679. Max Number of K-Sum Pairs
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const sorted = nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  let count = 0;

  while (l < r) {
    const sum = sorted[l] + sorted[r];
    if (sum === k) {
      count++;
      l++;
      r--;
    } else if (sum > k) {
      r--;
    } else {
      l++;
    }
  }

  return count;
};

// 1456. Maximum Number of Vowels in a Substring of Given Length
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = "aeiou";
  let max = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) count++;

    if (i >= k && vowels.includes(s[i - k])) count--;

    max = Math.max(max, count);
  }

  return max;
};

// 1004. Max Consecutive Ones III
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    if (nums[r] === 0) k--;
    if (k < 0) {
      if (nums[l] === 0) k++;
      l++;
    }
    r++;
  }
  return r - l;
};

// 1493. Longest Subarray of 1's After Deleting One Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0;
  let right = 0;
  let k = 1;
  let max = 0;

  while (right < nums.length) {
    if (nums[right] === 0) k--;

    if (k < 0) {
      if (nums[left] === 0) k++;
      left++;
    }

    max = Math.max(max, right - left);
    right++;
  }

  return max;
};

// 1657. Determine if Two Strings Are Close
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  if (word1 === word2) return true;

  const first = new Array(26).fill(0);
  const second = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    first[word1.charCodeAt(i) - "a".charCodeAt(0)]++;
    second[word2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; i++) {
    if (
      (first[i] === 0 && second[i] !== 0) ||
      (first[i] !== 0 && second[i] === 0)
    ) {
      return false;
    }
  }

  first.sort((a, b) => a - b);
  second.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (first[i] !== second[i]) return false;
  }

  return true;
};

// 2352. Equal Row and Column Pairs
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const hash = {};
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
    const key = JSON.stringify(grid[r]);
    hash[key] = (hash[key] || 0) + 1;
  }

  for (let r = 0; r < grid.length; r++) {
    const col = [];
    for (let c = 0; c < grid[r].length; c++) {
      col.push(grid[c][r]);
    }

    const key = JSON.stringify(col);
    if (key in hash) count += hash[key];
  }

  return count;
};

// 2390. Removing Stars From a String
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};

// 735. Asteroid Collision
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    const curr = asteroids[i];
    if ((stack.length < 1 || stack[stack.length - 1] < 0) && curr < 0) {
      stack.push(curr);
    } else if (curr > 0) {
      stack.push(curr);
    } else {
      const pop = stack.pop();
      if (Math.abs(curr) < Math.abs(pop)) {
        stack.push(pop);
      } else if (Math.abs(curr) > Math.abs(pop)) {
        i--;
      } else {
        continue;
      }
    }
  }

  return stack;
};

// 394. Decode String
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let str = "";
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      stack.push(num);
      stack.push(str);
      str = "";
      num = 0;
    } else if (s[i] === "]") {
      let prevStr = stack.pop();
      let prevNum = stack.pop();
      let currStr = str;
      str = prevStr;
      while (prevNum > 0) {
        str += currStr;
        prevNum--;
      }
    } else if (s[i] >= "0" && s[i] <= "9") {
      num += s[i];
    } else {
      str += s[i];
    }
  }

  return str;
};

// 649. Dota2 Senate
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const r = [];
  const d = [];
  const n = senate.length;

  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") {
      r.push(i + n);
    } else {
      d.push(i + n);
    }
  }

  while (r.length && d.length) {
    if (r[0] < d[0]) {
      r.push(r[0] + n);
    } else {
      d.push(d[0] + n);
    }
    r.shift();
    d.shift();
  }

  return r.length ? "Radiant" : "Dire";
};

// 2095. Delete the Middle Node of a Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (head === null) return null;
  let slow = head;
  let fast = head;
  let prev;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (!prev) return null;
  prev.next = slow.next;
  return head;
};

// 328. Odd Even Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head === null || head.next === null) return head;

  let odd = new ListNode(0);
  let oddPtr = odd;
  let even = new ListNode(0);
  let evenPtr = even;
  let idx = 1;

  while (head !== null) {
    if (idx % 2 === 0) {
      evenPtr.next = head;
      evenPtr = evenPtr.next;
    } else {
      oddPtr.next = head;
      oddPtr = oddPtr.next;
    }

    head = head.next;
    idx++;
  }

  evenPtr.next = null;
  oddPtr.next = even.next;

  return odd.next;
};

// 2130. Maximum Twin Sum of a Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let max = 0;
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;
  let curr = slow;
  let temp = null;

  while (curr !== null) {
    let next = curr.next;
    curr.next = temp;
    temp = curr;
    curr = next;
  }

  let curr1 = head;

  while (curr1 !== null) {
    const sum = curr1.val + temp.val;
    max = Math.max(max, sum);

    curr1 = curr1.next;
    temp = temp.next;
  }

  return max;
};

// 198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let currMax = 0;
  let prevMax = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = currMax;
    currMax = Math.max(prevMax + nums[i], currMax);
    prevMax = temp;
  }

  return currMax;
};

// 790. Domino and Tromino Tiling
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const memo = new Array(n + 1).fill(0);
  const mod = 10 ** 9 + 7;

  memo[0] = 1;
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i <= n; i++) {
    memo[i] = (2 * memo[i - 1] + memo[i - 3]) % mod;
  }

  return memo[n];
};

// 62. Unique Paths
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // m x n grid
  // robot at grid[0][0]
  // can only move down and right
  // return total unique paths to the end, grid[m - 1][n - 1]

  // (m - 1) + (n - 1)
  // 3 x 2 = 3
  // 3 x 7 = 27
  // 3 x 3 x 3

  // grid[i][j] = grid[m - 1][n] + grid[m][n - 1];

  // instantiate a grid
  // m sub grids eahc with n length
  // first subgrid, m[0] = 0, then fill with 1
  //  rest are m[0] = 1, then fill with 0;
  // push each subgrid into grid

  if (m === 1 || n === 1) return 1;
  const grid = [];

  const subArr = new Array(n);
  subArr.fill(1);
  subArr[0] = 0;
  grid.push(subArr);

  for (let i = 1; i <= m - 1; i++) {
    const subArr = new Array(n);
    subArr.fill(0);
    subArr[0] = 1;
    grid.push(subArr);
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      grid[i][j] += grid[i - 1][j] + grid[i][j - 1];
    }
  }

  return grid[m - 1][n - 1];
};

// 1143. Longest Common Subsequence
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // create 2D array using lengths + 1 for each text
  // cell dp[i][j] represents length of common sequence of substrings
  // text[0...i-1] and text2[0...j-1]
  // we fill in dp array from bottom up using recurrence relation:
  // if chars at i-1 and j-1 match, dp[i][j] = dp[i-1][j-1] + 1
  // else dp[i][j] = max dp[i-1][j], d[[i][j-1]]
  // the bottom right cell dp[length1][length2] is the longest length
  const length1 = text1.length;
  const length2 = text2.length;
  const dp = new Array(length1 + 1)
    .fill(0)
    .map(() => new Array(length2 + 1).fill(0));

  for (let i = 1; i <= length1; i++) {
    for (let j = 1; j <= length2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[length1][length2];
};

// 714. Best Time to Buy and Sell Stock with Transaction Fee
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let totalProfit = 0;
  let lowPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    if (price < lowPrice) lowPrice = price;
    else {
      const profit = price - lowPrice - fee;
      if (profit > 0) {
        totalProfit += profit;
        lowPrice = price - fee;
      }
    }
  }

  return totalProfit;
};

// 72. Edit Distance
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  /*  create 2d arr size (m+1) x (n+1)
      each element dp[i][j] represents min edit distance between
          first i chars of word1 & first j chars of word2
  initialize first row of dp from 0 - n and first column from 0 - m
  iterate over each char in word1 & word2
      if i = 0 dp[i][j] = j, min edit distance between empty & string of
          length j is j
      if j = 0 dp[i][j] = i, min edit distance between empty & string i of
          length i is i
      if chars i-1 and j-1 of word1 & word2 are equal, dp[i][j] =
          dp[i-1][j-1], no edit is needed
      if chars i-1 & j-1 of word1 & word2 !=, dp[i][j] =
          1 + min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j])
          where dp[i-1][j-1] is min edit distance after replacing
              char at i-1 with j-1 in word2,
          dp[i][j-1] is min edit distance after inserting char at j-1 of word2
              into word1,
          dp[i-1][j] is min edit distance after deleting char at i-1 of word1
  return value of dp[m][n], which represents min edit distance between entire
      string*/

  const m = word1.length;
  const n = word2.length;

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (word1[i - 1] !== word2[j - 1]) {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[m][n];
};

// 1448. Count Good Nodes in Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root, max = -Infinity) {
  if (!root) return 0;

  let res = 0;

  if (root.val >= max) {
    res++;
    max = root.val;
  }

  res += goodNodes(root.left, max);
  res += goodNodes(root.right, max);

  return res;
};

// 437. Path Sum III
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;
  let count = 0;

  function helper(node, sum) {
    if (!node) return;

    sum += node.val;
    if (sum === targetSum) count++;

    helper(node.left, sum);
    helper(node.right, sum);
  }

  function dfs(node) {
    if (!node) return;

    helper(node, 0);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return count;
};
