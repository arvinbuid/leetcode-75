// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

function isVowel(letter) {
  return new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]).has(letter);
}

function reverseVowels(s) {
  const arr = Array.from(s); // convert string into array
  let start = 0; // left pointer
  let end = arr.length - 1; // right pointer
  while (start < end) {
    if (isVowel(arr[start]) && isVowel(arr[end])) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    if (!isVowel(arr[start])) start++;
    if (!isVowel(arr[end])) end--;
  }
  return arr.join("");
}

// Constraints

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));

// Big O:
//
// Time Complexity - O(n)
// Space Complexity - O(n)
