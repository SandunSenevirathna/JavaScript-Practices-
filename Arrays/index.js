/**
 * push() = add new item to end of the array
 * pop() = delete last item in array
 * shift() = delete first item in the array
 * unshift() = add item to array as first index
 */

/*var studentName = ["Kamal", "Nimal", "Sunil", "Pawan"];
var teachersName = []; // Using array literal notation

console.log("Initial student names:", studentName);
console.log("Initial teachers names:", teachersName);

studentName.push("Sandun"); // Add new student name to the array
console.log("Add new student name to the array:", studentName);

teachersName.push("Senevirathne", "Rathnamalala", "Gunawardhana"); // Add new teacher names to the array
console.log("Add new teachers names to the array:", teachersName);

console.log(`The last added data in the arrays is "${studentName.pop()}" and now it's deleted:`);
console.log("Updated student names after pop:", studentName);

console.log(`The first data in the arrays is "${studentName.shift()}" and now it's deleted:`);
console.log("Updated student names after shift:", studentName);

const newLength = studentName.unshift("Sunimal"); // Add new item to 0 index and get the new length
console.log(`Add new item to index 0. New length of studentName array: ${newLength}`);
console.log("Updated student names after unshift:", studentName);

console.log(`Value of index 1 in studentName array: ${studentName[1]}`);
console.log(`Length of the studentName array: ${studentName.length}`);


console.log(`useing IndexOF fuction get result "Sunil" =  ${studentName.indexOf("Sunil")}`)


console.log("---------------------------------------------");
console.log("Displaying student names using a for loop:");
for( var i = 0; i < studentName.length; i++){
    console.log(studentName[i])
}

console.log("---------------------------------------------");
console.log("Displaying student names using forEach method:");
studentName.forEach(names => {
    console.log(names);
});*/

/*
Task: Write a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers in the array.
*/

var numbers = [10, 20, 30, 40.5, 50];
var sum = 0;

numbers.forEach((num) => {
  sum = sum + num;
});
console.log(sum);

let even = numbers.filter((num) => num % 2 !== 0);

console.log(even);
