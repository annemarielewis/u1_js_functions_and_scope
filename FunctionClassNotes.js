//Functions
//-->input and output
//coloquial diction: x stands for output of a function 
//we can re-use, call, and re-define functions
//function limit repetition of code: d.r.y code ("don't repeat yourself")

//example: remake below code in a SVGFEDisplacementMapElement, non-repetative form:
const movie1 = 'Saving Private Ryan'
const year1 = 1998
console.log(`${movie1} was released in ${year1}`)

const movie2 = 'Interstellar'
const year2 = 2014
console.log(`${movie2} was released in ${year2}`)

const movie3 = 'Jason Bourne'
const year3 = 2016
console.log(`${movie3} was released in ${year3}`)

//instead:

function showMovie(movie, year) {
    console.log(`${movie} was released in ${year}`)
}

showMovie('Saving Private Ryan', 1998)
showMovie('Interstellar', 2014)
showMovie('Jason Bourne', 2016)

//function format: function functionName () {}
//(function name is optional for local functions)

//PATTERN: 3 parts to javescript: keyword, condition/parameters, action
//ex. if () {}, switch () {}, for () {}, function () {}

function sayHello() {
    console.log("Hello")
}

//have to declare the function
//then have to CALL the function (or it won't print)

//calling function: functionName ()
sayHello()

//FUNCTION HAS TWO PARTS: DECLARATION AND THE CALL


//CREATE FUNCTION FOR NAME AND DAY OF THE WEEK: 1) you'll need vatiables

let dayOfWeek = "Wednesday"
let firstName = "Annemarie"

//create a function that actually can save lines of code: dry. It needs to be dynamic to save time!)
//dynamic code: has parameters/can take in arguments!

//ex.
//function helloName () {
//   console.log(`Hello ${firstName}, have a great ${dayOfWeek}`)
//}
//helloName()

//function doMath () {
//  console.log(2+3)
//}

//doMath()

//^Make this more general/useable/efficient so taht it can be dynamic: add parameters and arguments
//parameters are what the code wants to take in
//arguments are information we are passing in to the arguments
function doMath(num1, num2) {
    console.log(num1 + num2)
}

doMath(10, 11)
//10 and 11 are the arguments
//don't have to define num1 and num2 as varuiables in this example because they are automatically being assigned as variables beghind the scene when put in as parameters!

function showMovie(movie, year) {
    console.log(`${movie} was released in ${year}`)
}
showMovie()

showMovie(`Seven Samurai`, 1954)

function showPrice(item, price) {
    console.log(`${item} costs ${price}`)
}

showPrice(`guitar`, `400`)
showPrice(`headphones`, `200`)

//functions take in arguments and process that information as a parameter==>don't have to rewrite code for every argument (saves time!)

//can be more than two parameters in a function as well! As many parameters as needed is possible, just make sure order of arguments matches their parameter's order

//Arrow Functions: more modern way to write functions
//old way : function functionName () {}
//new way: const descriptinveName = () => {}
const sayGoodbye = () => { console.log("goodbye") }
sayGoodbye()

const goodbye = (myName) => { console.log(`goodbye ${myName}`) }

goodbye("Annemarie")

//Design: COMMENT THE PURPOSE OF A FUNCTION BEFORE IT SO THAT OTHERS WILL EASILY UNDERSTAND ITS PURPOSE AND SO YOU WILL UNDERSTAND IT LATER :-)

