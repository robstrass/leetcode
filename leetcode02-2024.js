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
