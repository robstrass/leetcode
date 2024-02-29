// EASY

// 1768. Merge Strings Alternately
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let str = "";
  const max = Math.max(word1.length, word2.length);

  for(let i = 0; i < max; i++) {
      if (word1[i]) str += word1[i];
      if (word2[i]) str += word2[i];
  }

  return str;
};
