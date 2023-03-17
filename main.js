// Wait window to load
window.onload = function(){
    document.querySelector("h1").style.color = "Blue";
};

//  Single line comment 

/*
    Multiple line comment
*/

// window.alert("Hello from JS File");

// document.write("<h1> Hello <span>Page</span><h1>");

console.log("Hello from JS File");
console.error("Error");
console.table(["Geo" , "Geo 2", "Geo 3"]);
// For styling specific part of the sentense , use %c before the part to style.
// Can be used up to 2 parts
console.log("Hello from %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px");

/**
 * ES6
 */

var myName = "Geo";
console.log("Hello "+ myName);
console.log(`Hello ${myName}`);

/**
 * Data Types Intro
 */

console.log("Geo");
console.log(typeof "Geo"); // String
console.log(typeof 5000);  // number
console.log(typeof 5000.99);    // number
console.log(typeof [10, 15, 17])    // object
console.log(typeof ["Geo", "Ash", "Vio"]) // object
console.log(typeof {name: "Geo", age: 24, country: "Eg"})  // object
console.log(typeof true) // bolean
console.log(typeof false) // bolean
console.log(typeof undefined)  // undefined
console.log(typeof null)    // object