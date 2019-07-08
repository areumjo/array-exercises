
/**
 * @instructions
 * `sum(numbers): Number`
 * Given an array of numbers, return a sum total of all the numbers.
 */
function sum (numbers) {
  // TODO: Add your solution here.
  var total = 0;
  numbers.forEach(element => {
    total = total+element;
  });
  return total;
}

/**
 * @instruction
 * `doubleNumbers(numbers): Array`
 * Given an array of numbers, return an array where each element is double its original value.
 */
function doubleNumbers (numbers) {
  // TODO: Add your solution here.
  var array2 = numbers.slice();
  return array2.map(element => element*2);
}

/**
 * @instruction
 * `doubleCharacters(chars): Array`
 * Given a string, return an array where each element is double its original value. (e.g. 'ab' -> 'aabb')
 */
function doubleCharacters (chars) {
  // TODO: Add your solution here.
  var newArr = [];
  for (let i=0; i<chars.length; i++) {
    newArr.push(chars[i]);
    newArr.push(chars[i]);
  }
  return newArr.join('');
}

/**
 * @instruction
 * `backwardsify(array): Array`
 * Reverse or flip the values in the array.
 */
function backwardsify (array) {
  // TODO: Add your solution here.
  if (Object.keys(array).length === 0) {
	  return {};
  } else {
    var newArr = [];
    for (let i=array.length-1; i>-1; i--) {
      newArr.push(array[i]);
	  }
	  return newArr;
  }
}

/**
 * @instruction
 * `interleave(list1, list2): Array`
 * Should return a combined single array, with individual values alternating between list1 & list2.
 */
function interleave (list1, list2) {
  // TODO: Add your solution here.
  if (list1.length != list2.length) {
	  return null;
  } else {
	var newArr = [];
	for (let i=0; i<list1.length; i++) {
		newArr.push(list1[i]);
		newArr.push(list2[i]);
	}
	return newArr;
  }
}

/**
 * @instruction
 * `makeRange(count, fillString): Array`
 * Return array of `count` length where each element is set to `fillString`
 */
function makeRange (count, fillString) {
  // TODO: Add your solution here.
    var newArr = [];
  for (let i=0; i<count; i++) {
	  newArr.push(fillString);
  }
  return newArr;
}

/**
 * @instuction
 * `countByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys. The value should be a Number, with the count of words with same starting character.
 *
 * @example
 *
 * const input = ['cat', 'kitty', 'catzilla', 'fluffykins']
 * countByFirstLetter(input)
 * // will return:
 * // {
 * //  c: 2, // cat + catzilla
 * //  k: 1, // kitty
 * //  f: 1  // fluffykins
 * // }
 */

function countByFirstLetter (words) {
  // TODO: Add your solution here.
  var truncatedWords = words.map(element => element[0]);
  var newObj = {};
  for (let i=0; i<truncatedWords.length; i++) {
	  if (newObj.hasOwnProperty(truncatedWords[i]) != true) {
		  newObj[truncatedWords[i]]= 1;
	  } else {
		  newObj[truncatedWords[i]]= 2;
	  }
  }
  return newObj;
}

/**
 * @instructions
 * `groupByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys.
 * The key value should be an array with only the words sharing a starting character.
 *
 * @example
 *
 * const input = ['Cat', 'Kitty', 'catzilla', 'fluffykins']
 * const result = groupByFirstLetter(input)
 * // result deep equals:
 * // {
 * //  c: ['cat', 'catzilla'],
 * //  k: ['kitty'],
 * //  f: ['fluffykins']
 * // }
 *
 */

function groupByFirstLetter (words) {
  // TODO: Add your solution here.
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////

if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = {
    sum,
    doubleCharacters,
    doubleNumbers,
    backwardsify,
    interleave,
    makeRange,
    countByFirstLetter,
    groupByFirstLetter
  }
}
