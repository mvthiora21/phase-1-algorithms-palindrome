function isPalindrome(word) {
  // Write your algorithm here
  let start = 0;
  let end = word.length - 1;
  
  while (start <= end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}



/* 
Add your pseudocode here
1. Define a function named isPalindrome that takes a string (word) as input.
2. Initialize two pointers, one at the beginning of the word (let's call it `start`) and the other at the end of the word (let's call it `end`).
3. While start pointer is less than or equal to end pointer:
   a. If the character at `start` position is not equal to the character at `end` position, return false.
   b. Move the `start` pointer forward and the `end` pointer backward.
4. If the loop completes without returning false, return true.
*/


/*
Add written explanation of your solution here
We define a function called isPalindrome that takes a string word as input.

We initialize two pointers: start at the beginning of the word and end at the end of the word. These pointers will be used to traverse the string from both ends.

We use a while loop to iterate through the string. The loop continues as long as the start pointer is less than or equal to the end pointer. This ensures that we're comparing characters from both ends of the string until they meet in the middle.

Inside the loop, we check if the character at the start position is not equal to the character at the end position. If they are not equal, it means the string is not a palindrome, so we return false.

If the characters at start and end positions are equal, we move the start pointer one position forward and the end pointer one position backward.

We continue this process until either the characters don't match (in which case the function returns false) or the pointers meet in the middle of the string (in which case the function returns true).

If the loop completes without returning false, it means that the string is a palindrome, so we return true.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
// add your own custom tests in here
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;