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

  for (let i = min; i > 0; i--) {
    if (str1.length % i === 0 && str2.length % i === 0) {
      return str1.substring(0, i);
    }
  }
};
