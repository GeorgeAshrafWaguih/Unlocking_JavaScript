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

/**
 * Numbers
 */

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(1000000.00);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 20000000);

/**
 * Number Methods
 */

console.log((100).toString())
console.log(100..toString())

console.log(100.55555.toFixed(2))
console.log(100.55355.toFixed(2))

console.log(parseInt("100"))
console.log(parseInt("100.500 Geo"))  // 100
console.log(parseFloat("100.501 Geo")) //100.501

console.log(Number.isInteger("100")) //False
console.log(Number.isInteger(100.500)) //False
console.log(Number.isInteger(100))  //True

console.log(Number.isNaN(100.500)) // False
console.log(Number.isNaN("Geo")) // False

/**
 * Math Object
 */

console.log(Math.round(99.2)) //99
console.log(Math.round(99.5)) //100

console.log(Math.ceil(99.2))  //100
console.log(Math.floor(99.9)) //99

console.log(Math.min(10, 20, 100, -100, 90)); // -100
console.log(Math.max(10, 20, 100, -100, 90)); // 100

console.log(Math.pow(2, 4)) // 2**4 = 16

console.log(Math.random()) // generates random number

console.log(Math.trunc(99.5)) // 99 - returns the integer part

/**
 * String Methods
 */

let theName = "George";
let theList = [1, 2, 3, 4, 5];

console.log(theName);  // George
console.log(theName.charAt(1)); // e
console.log(theName.charAt(6)); // undefined
console.log(theName[1]); // e
console.log(theName.length) // 6

let theName1 = "  George  "

console.log(theName1.trim())  // George - removes spacing in field
console.log(theName.toUpperCase())  // GEORGE
console.log(theName.toLowerCase())  // george

console.log(theName1.trim().charAt(3).toUpperCase())  // R - chaining of methods 

let aa = "Geo Web School";

console.log(aa.indexOf("Web")); // 7
console.log(aa.indexOf("Web", 8)); // -1
console.log(aa.indexOf("o")) // 2
console.log(aa.lastIndexOf("o")); // 10
console.log(aa.slice(0,9)) // Geo Web S
console.log(aa.slice(-5)) // chool
console.log(aa.slice(-5, -3)) // ch
console.log(aa.repeat(4))
console.log(aa.split()) // ['Geo Web School']
console.log(aa.split(" ")) //  ['Geo', 'Web', 'School']
console.log(aa.split(" ",2)) //  ['Geo', 'Web'] - adding a limit to the array 
console.log(aa.substring(4)) //  Web School
console.log(aa.substring(4,7)) //  Web 
console.log(aa.substring(-10, 7)) //  Geo Web- any number less than zero is considered zero
console.log(aa.length) // 14
console.log(aa.substring(aa.length-1)) // l - last letter of the string
console.log(aa.substr(0,3)) // Geo
console.log(aa.substr(-5, 2)) // ch
console.log(aa.substr(-6)) // School

console.log(aa.includes("Web")) // True
console.log(aa.includes("Web", 6)) // false , starts from index 6
console.log(aa.startsWith("G")) // True
console.log(aa.startsWith("G",3)) // false , starts from index 3
console.log(aa.endsWith("o")) // false
console.log(aa.endsWith("o", 3)) // true , use lenght and not index for size
console.log(aa.endsWith("eo", 3)) // true , use lenght and not index for size

/**
 * Comparison operators
 */

console.log(10 == "10") // true
console.log(10 != "10") // false
console.log(10 === "10") // false ,  === means identical match
console.log(10 !== "10") // true

/**
 * logical operators
 */

console.log(true)  // true
console.log(!true)  // false
console.log(!(10 == "10"))  // false
console.log(10 == "10" && 10 > 8 && 10 >= 10) // true
console.log(10 == "10" || 10 > 80 || 10 >= 50) // true

/**
 * If conditions
 *  Control flow
 */

let price = 100 
let discount = false
let discountAmount = 30
let country = "Egypt"
let student = true

if(discount === true) {
    price -= discountAmount // price = price - discountAmount
}else if(country === "Egypt"){
    price -= discountAmount + 10 // price = price - (discountAmount + 10)
}else{
    price -= 10
}
console.log(price)

/**
 * Nested If
 */

if(discount === true) {
    price -= discountAmount; // price = price - discountAmount
}else if(country === "Egypt"){
    if (student === true){
    price -= discountAmount + 30;
    }
}   else{
    price -= 10;
}
console.log(price)

/**
 * COnditional Ternary operator
 */

let theName2 = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male"){
    console.log("Mr");
}else {
    console.log("Mrs");
}

theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let result = theGender === "Male" ? "Mr" : "Mrs";
document.write(result)
document.write(theGender === "Male" ? "Mr" : "Mrs")
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName2}`)

theAge < 20 
? console.log(20) 
: theAge > 20 && theAge < 60 
? console.log("20 tp 60") 
: theAge > 60 
? console.log("larger than 60") 
: console.log("unknown");

/**
 * Nullish Coalescing Operator
 */

let price1 = null; 
console.log(`The price is ${[price1 || 200]}`) // price = 200 if it is null or undefined or 0 
console.log(`The price is ${[price1 ?? 200]}`) // price = 200 if it is null or undefined 

/**
 * Switch Statement
 */

let day = 5;
switch(day){
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    default:
        console.log("Unknown day")
}