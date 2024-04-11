/*
Primitive
    • String
    • Numbers
    • Boolean
    • Null
    • Undefined

Non-Primitive
    • Array
    • Object

*/

var firstName = "sandun",
  age = 24,
  gender = "Male",
  married = false,
  middleName = null,
  country;

if (married) {
  console.log(
    `this is ${firstName}, he is ${age} and ${gender}. at this moment he is married. his middle name is ${middleName}`
  );
} else {
  console.log(
    `this is ${firstName}, he is ${age} and ${gender}. at this moment he is not married. his middle name is ${middleName}`
  );
}

console.log(typeof(country));