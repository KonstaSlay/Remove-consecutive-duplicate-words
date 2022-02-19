/* Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"*/

const removeConsecutiveDuplicates = str => {
	return str.split(" ").filter((word, index, arr) => word != arr[index + 1]).join(" ");
}

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));



//   Решение Codewars

const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

 