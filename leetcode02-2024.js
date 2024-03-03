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
