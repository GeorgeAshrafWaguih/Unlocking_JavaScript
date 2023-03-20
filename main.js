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

/**
 * Variables 
 */

var name = "Geo";
var age = 33
console.log(name)
console.log(name + " "+ age);
console.log(hello)
hello.innerHTML = "Option"

var user = "Geo"
var User = "Buddy"
console.log(user)
console.log(User)

console.log("This is a \"School\"")
console.log("This \
is a \
School")
console.log("Welcome\nBack")

document.write(name + " "+ age)

/**
 * Template Literals (Template strings)
 */

let a = "We love"
let b = "JavaScript"
let c = "and"
let d = "Programing"
console.log(a + " "+ b + " " + c + " " + d)
console.log(a + " "+ b + "\n" + c + " " + d)
console.log(`${a} "${b}"
${c} "${d}"`)

let title = "Hello"
let desc = "This is the paragraph"
let markUp = `
    <div class="card">
        <div class="child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    </div>
`
document.write(markUp)

let title1 = "Geo"
let desc1 = "Geo Web School"
let date = "25/10"

let card = `
    <div class="card">
        <div class="child">
            <h3>Hello ${title1}</h2>
            <p>${desc1}</p>
            <span>${date}</span>
        </div>
    </div>
`

document.write(card.repeat(4));

/**
 * Arithmetic operators
 */

console.log(10*20);
console.log(10+"G");
console.log(10*"G");
console.log(typeof NaN);
console.log(2**4);
console.log(2*2*2*2);
console.log(11%2);

console.log(+100);
console.log(+"100");
console.log(+"Geo");
console.log(+"0xff");
console.log(+null);
console.log(+true);
console.log(+false);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-0xff);
console.log(-null);
console.log(-true);
console.log(-false);

console.log(Number("100"));

/**
 * Type Coercion 
 */

let x = "10";
let y = 20;
let z = true;
console.log(x+y);
console.log(+x+y);
console.log(x-y);
console.log(""-2);
console.log(+"");
console.log(false-true);
console.log(+false-+true);
console.log(x+y+z);
console.log(+x+y+z);