 // Wait window to load
 window.onload = function(){
     document.querySelector("h1").style.color = "Blue";
 };

 //  Single line comment 

 /*
 //     Multiple line comment
 */

 window.alert("Hello from JS File");

document.write("<h1> Hello <span>Page</span><h1>");

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

/**
 * Arrays
 */

let myFriends = ["Ahmed", "Mayar", "Sayed",["Marawan", "Ali"]];
console.log(`Hello ${myFriends[0]}`)
console.log(`Hello ${myFriends[2]}`)
console.log(`Hello ${myFriends[1][2]}`) // can access char in element
console.log(`Hello ${myFriends[3]}`)  // Hello Marawan,Ali
console.log(`Hello ${myFriends[3][1]}`) // Hello Ali
console.log(`Hello ${myFriends[3][1][2]}`) // Hello i

console.log(myFriends) // ['Ahmed', 'Mayar', 'Sayed', Array(2)]
myFriends[1]="Mahmoud"
console.log(myFriends) // ['Ahmed', 'Mahmoud', 'Sayed', Array(2)]
myFriends[3]="Sameh"
console.log(myFriends) // ['Ahmed', 'Mahmoud', 'Sayed', 'Sameh']
myFriends[3]=["Sameh","Amir"]
console.log(myFriends) // ['Ahmed', 'Mahmoud', 'Sayed', Array(2)]
console.log(typeof myFriends) // object
console.log(Array.isArray(myFriends)) // true

/**
 * Array Methods
 */

let myFriends1=["Ahmed", "Mohamed", "Sayed", "Alaa"]
console.log(myFriends.length) // 4
myFriends1[3]="Gamal"
console.log(myFriends1) // ['Ahmed', 'Mohamed', 'Sayed', 'Gamal']
myFriends1[6]="Hany"
console.log(myFriends1) // ['Ahmed', 'Mohamed', 'Sayed', 'Gamal', empty × 2, 'Hany']
console.log(myFriends1.length) // 7
myFriends1[myFriends1.length]="Ali" // to add element to array in a dynamic way
console.log(myFriends1) // ['Ahmed', 'Mohamed', 'Sayed', 'Gamal', empty × 2, 'Hany', 'Ali']
myFriends1[myFriends1.length]="Paige"
console.log(myFriends1) // ['Ahmed', 'Mohamed', 'Sayed', 'Gamal', empty × 2, 'Hany', 'Ali', 'Paige']
myFriends1[myFriends1.length-1]= "Heather" // to change last element in dynamic way
console.log(myFriends1) //  ['Ahmed', 'Mohamed', 'Sayed', 'Gamal', empty × 2, 'Hany', 'Ali', 'Heather']
myFriends1.length = 3
console.log(myFriends1) // ['Ahmed', 'Mohamed', 'Sayed']

// Add , remove from array 
let myFriends2=["Heather","Paige","Lolita","Fernanda"]
console.log(myFriends2);  // ['Heather', 'Paige', 'Lolita', 'Fernanda']
myFriends2.unshift("Osama","Nabil") // unshift to add elements to the start of the array
console.log(myFriends2); // ['Osama', 'Nabil', 'Heather', 'Paige', 'Lolita', 'Fernanda']
myFriends2.push("Osama","Nabil") // Adds elements to the end of the array 
console.log(myFriends2); // ['Osama', 'Nabil', 'Heather', 'Paige', 'Lolita', 'Fernanda', 'Osama', 'Nabil']
let first = myFriends2.shift(); // removes first element and store it 
console.log(myFriends2); //['Nabil', 'Heather', 'Paige', 'Lolita', 'Fernanda', 'Osama', 'Nabil']
console.log(first) // Osama
let last = myFriends2.pop() // removes last element and store it 
console.log(myFriends2) //  ['Nabil', 'Heather', 'Paige', 'Lolita', 'Fernanda', 'Osama']
console.log(last) // Nabil

// Search array 
let myFriends3 = ["Hailey","Bri","Negine","Alaa","Hailey"]
console.log(myFriends3)
console.log(myFriends3.indexOf("Hailey")) // 0
console.log(myFriends3.indexOf("Hailey",2)) // 4 , giving the start of where to look in the array "2"
console.log(myFriends3.lastIndexOf("Hailey")) // 4 , searching from the end of array 
console.log(myFriends3.lastIndexOf("Hailey",-2)) // 0 , giving the start of where to look in the array "-2"
console.log(myFriends3.includes("Hailey")) // true
console.log(myFriends3.includes("Hailey",2)) // true

if (myFriends3.indexOf("Hailey") === -1) // -1 means element is not found in array
{
    console.log("Not Found")
} 
if (myFriends3.indexOf("Ali") === -1)
{
    console.log("Not Found")
} 

// Sorting array 
let myFriends4 = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10]
console.log(myFriends4) // 
console.log(myFriends4.sort()) // [-10, -20, 10, '10', 100, 1000, 20, '90', 'Mohamed', 'Sayed']
console.log(myFriends4.reverse()) // ['Sayed', 'Mohamed', '90', 20, 1000, 100, '10', 10, -20, -10]
console.log(myFriends4.sort().reverse())  // chain function

// Slicing array
let myFriends5=["Ahmed","Sayed","Ali","Osama","Gamal","Ameer"]
console.log(myFriends5)
console.log(myFriends5.slice())
console.log(myFriends5.slice(1)) //  ['Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFriends5.slice(1,3)) // ['Sayed', 'Ali'] 
console.log(myFriends5.slice(-3)) // ['Osama', 'Gamal', 'Ameer']
console.log(myFriends5.slice(1,-2)) // ['Sayed', 'Ali', 'Osama']
console.log(myFriends5.slice(-4,-2)) // ['Ali', 'Osama']

myFriends5.splice(0, 0, "Sameer","Samara") // splice (start index, number of elements to remove , elements to be added)
console.log(myFriends5)

// Joining arrays
let myFriends6 = ["Ahmed","Sayed","Ali","Osama","Gamal","Ameer"]
let myNewFriends = ["Samar","Sameh"]
let schoolFriends = ["Haytham","Shady"]
let allFriends = myFriends6.concat(myNewFriends,schoolFriends,"Gameel")

console.log(allFriends) // ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Sameh', 'Haytham', 'Shady', "Gameel"]

console.log(allFriends.join()) // Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Sameh,Haytham,Shady,Gameel
console.log(allFriends.join("")) // AhmedSayedAliOsamaGamalAmeerSamarSamehHaythamShadyGameel
console.log(allFriends.join(" | ")) // Ahmed | Sayed | Ali | Osama | Gamal | Ameer | Samar | Sameh | Haytham | Shady | Gameel
console.log(allFriends.join(" | ").toUpperCase()) // AHMED | SAYED | ALI | OSAMA | GAMAL | AMEER | SAMAR | SAMEH | HAYTHAM | SHADY | GAMEEL

/**
 * Loop
 */
//for loop

for (let i =0; i < 10; i++) {
    console.log(`Employee ${i+1}`)
}

// Loop on sequence

let myFriends7 = [1, 2, "Osama","Ahmed","Sayed","Ali","Amira"]

let onlyNames = []

for (let i = 0; i<myFriends7.length ; i++) {
    console.log(myFriends7[i])
} // print the whole list item by item 

for(let i = 0; i<myFriends7.length ; i++) {
if (typeof myFriends7[i] === 'string') {
    onlyNames.push(myFriends7[i]) // add strings to another array 
    console.log(myFriends7[i])
}
} // print only the strings and exclude the numbers
console.log(onlyNames)

// Nested Loop
let products = ["Keyboard","Mouse","Pen","Pad","Monitor"]
let colors = ["Red","Green","Black"]
let models = [2020,2021]
for(let i = 0; i < products.length; i++){
    console.log("#".repeat(15))
    console.log(`# ${products[i]}`)
    console.log("#".repeat(15))
    console.log("Colors:")
    for(let j = 0;j<colors.length;j++){
        console.log(`- ${colors[j]}`)
    }
    console.log("Models:")
    for (let k=0;k<models.length;k++){
        console.log(`- ${models[k]}`)
    }
}

// Loop Control  - Break , Continue, Label

let products1 = ["Keyboard","Mouse","Pen","Pad","Monitor"]
let colors1 = ["Red","Green","Black"]

// Break
for (let i=0;i<products1.length;i++){
    if(products1[i]==="Pen"){
        break
    }                                   // break - ends the loop immediately
    console.log(products1[i])
}

// Continue
for (let i=0;i<products1.length;i++){
    if(typeof products1[i]==="number"){
        continue
    }                                   // continue - skips the iteration and go to the next one
    console.log(products1[i])
}

// label

mainloop : for (let i=0;i<products1.length;i++){
    
    console.log(products1[i])
    nestedloop: for(let j=0;j<colors1.length;j++){
        console.log(`- ${colors1[j]}`)
        if(colors1[j]=="Green"){
            break mainloop
        }
    }
}

// Advanced loop
let products2=["Keyboard","Mouse","Pen","Pad","Monitor","iPhone"]
let i=0
for(;;){
    console.log(products2[i])
    i++
    if(i === products2.length) break
}

/**
 * Products practice
 */
let products3=["Keyboard","Mouse","Pen","Pad","Monitor","iPhone"]
let colors2=["Red","Green","Blue"]
let showCount = 5
document.write(`<h1>Show ${showCount} Products</h1>`)

for (let i=0;i<showCount;i++){
    document.write(`<div>`)
    document.write(`<h3>[${i+1}] ${products3[i]}</h3>`)
    for(let j=0;j<colors2.length;j++){
        document.write(`<p>${colors2[j]}</p>`)
    }
    document.write(`<p>${colors2.join(" | ")}</p>`)
    document.write(`</div>`)
}

/**
 * Loop - While
 */

let products4=["Keyboard","Mouse","Pen","Pad","Monitor","iPhone"]
let index =0

while (index<products4.length) {
    console.log(products4[index])
    index++
    
}

/**
 * Do While
 */
let products5=["Keyboard","Mouse","Pen","Pad","Monitor","iPhone"]
let i1 =0

do {
    console.log(i1)
    i1++   
} while(false)

/**
 * Function Intro
 */

function sayHello(name) {
    console.log(`Hello ${name}`)
}
sayHello("Geo")
sayHello("Fox")

/**
 * Advanced Function
 */

function sayHello1(userName, age){
    if (age <20){
        console.log(`App is not suitable for you, ${userName}`)
    }else {
        console.log(`Hello ${userName}! Your age is ${age}`)
    }
    
}
sayHello1("Geo",34)
sayHello1("Sayed",40)
sayHello1("Ali",18)

function generateYears(start,end,exclude) {
    for(let i=start;i<=end;i++){
        if(i===exclude) continue
        console.log(i)
    }
}
generateYears(1988,1991,1989)

// Function Return and Use Cases
function calc(num1 , num2) {
    return num1+num2
    }

let result1 = calc(10,20)
console.log(result1 + 100)

// function generate1(start,end){
//     for (let i=start;i<=end;i++){
//         if(i===15){
//             return `Interrupting`
//         }
//         console.log(i)
//     }
// }
// generate1(10,20)

function sayHello(userName, age="Unknown") {
    // if(age=== undefined){
    //     age = "Unknown"
    // }
    // age = age || "Unknown"
    return `Hello ${userName}! Your Age is ${age}`
}
console.log(sayHello("Geo")) //Hello Geo! Your Age is Unknown
console.log(sayHello("Geo",34)) //Hello Geo! Your Age is 34

Rest arguments
function calc(...numbers) {
    //console.log(Array.isArray(numbers))  // true

    let result = 0
    for (let i = 0; i<numbers.length; i++){
        console.log(numbers[i])
        result+=numbers[i]
    }
    return result
}
console.log(calc(10,20,10,30,50))

function showInfo(user="Unknown", age="Unknown", rate=0, show= "Yes", ...skills){
    document.write(`<div>`)
    document.write(`<h2>Welcome, ${user}</h2>`)
    document.write(`<p>Age:${age}</p>`)
    document.write(`<p>Hour rate: $${rate}</p>`)
    if (show === "Yes"){
        if (skills.length>0){
            document.write(`<p>Skills: ${skills.join(" | ")}</p>`)    
        } else (
            document.write(`<p>Skills: No Skills </p>`)    
        )
    } else {
        document.write(`<p>Skills is hidden</p>`)
    }
    document.write(`</div>`)
}
showInfo("Geo",34,20,"Yes","HTML","CSS","JS")

/**
 * Anonymous Function 
*/
console.log(calc(10,20))
function calc(num1,num2){
    return num1+num2
}

let calculator = function(num1,num2){
    return num1+num2
}
console.log(calculator(10,20))

function sayHello() {
    console.log("Hello Geo")
}

document.getElementById("show").onclick = function(){
    console.log("SHOW")
    sayHello()
}

setTimeout(function() {
    console.log("Good")
}, 2000);

/**
 * Return Nested Function
 */

// Example 1
function sayMessage(fName, lName){
    let message = `Hello`
    // Nested Function
    function concatMsg(){
        message = `${message} ${fName} ${lName}`
    }

    concatMsg();

    return message
}

console.log(sayMessage("Geo","Ash"))

//Example 2
function sayMessage(fName, lName){
    let message = `Hello`
    // Nested Function
    function concatMsg(){
        return `${message} ${fName} ${lName}`
    }

    return concatMsg()
}

console.log(sayMessage("Geo","Ash"))

Example 3
function sayMessage(fName, lName){
    let message = `Hello`
    // Nested Function

    function concatMsg(){
        function getFullName(){
            return `${fName} ${lName}`
        }
        return `${message} ${getFullName()}`
    }

    return concatMsg()
}

console.log(sayMessage("Geo","Ash"))

/**
 * Arrow Function
 */

let print = () => 10  // can be summerized in one line if only one code in function

let print = function() {
    return 10
}

let print = num => num

let print = function (num1, num2) {
    return num1+num2
}

let print = (num1, num2) => num1+num2

console.log(print(100,50))

/**
 * Scope
 * Global - Local
 */

var a = 1
let b = 2

function showText() {
    var a = 10
    let b = 20
    console.log(`Function - From Local ${a}`)
    console.log(`Function - From Local ${b}`)    
}

console.log(`From Global ${a}`)
console.log(`From Global ${b}`)

showText()

/**
 * Scope - Block
 */

var x = 10

if (true) {
    let x = 50
}
console.log(x) // 10

if (true) {
    var x = 50
}
console.log(x) // 50

/**
 * Scope - Lexical
 */

let a = 10 

function parent() {

    function child(){
        console.log(a)

        function grand() {
            console.log(`From grand ${a}`)
        }
        grand()
    }
    child()
}
parent()

/**
 *  Higher Order Functions - Map
 */

