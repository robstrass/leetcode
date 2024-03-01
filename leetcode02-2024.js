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
