// import { getPosts } from "./postController.js";
import getPosts, { getPostsLength } from "./postController.js";

// const { generateRandomNumber, celsiusToFahrenheit } = require("./utils");

// console.log(`Random number: ${generateRandomNumber()}`);
// console.log(`Celsius to Fahrenheit:${celsiusToFahrenheit(0)}`);
console.log(getPosts());
console.log(`Posts length: ${getPostsLength()}`);
