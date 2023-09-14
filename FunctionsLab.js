//Write a function called logIn that takes your name as a parameter and 
//console.logs 'Hello /your name/!' when it is called

const logIn = (userName, isLoggedIn) => {
    if (isLoggedIn === true) {
        console.log(`Hello ${userName}`)
    } else { console.log(`please log in`) }
}
logIn('Annemarie', true)
logIn('bob', false)

logIn('Darcy')

//areaOfLawn(20, 30, 1.45)

//We are looking to re-sod our lawn. It has a length of 20' and a width of 30', 600
//with Sod costing $1.45/sqft. Additionally, it will cost $100 to have thew work 
//done. 
//Write a function that finds the area of the lawn, 
//the price of the Sod, 
//and what the total cost will be to get the lawn redone. 
//If our budget is $700, will it be enough? 
//Log either how much extra we will need, or how much we will have left over
let cost = ((20 * 30) * 1.45) + 100
console.log(cost)

const areaOfLawn = (length, width, sod) => { 
    let area = (length * width) * sod + 100
    console.log(area)
}
let total = areaOfLawn(20, 30, 1.45)
console.log(total)
let difference = (700 - total)
if (difference < 0) {difference = difference * -1
} else {difference = difference}
console.log(difference)

// {const areaOfLawn = (length, width, sod) => {
//     let total = (length*width)*sod+100
//     let budget = 700
//     if (total > budget){
//         console.log(total, budget, total-budget)
//     } else if (total < budget){
//         console.log(total, budget, budget-total)
//     } else {
//         console.log(total, budget)
//     }
// }}

const students = [
    'Alice',
    'Andy',
    'Andrew',
    'Casey',
    'Damian',
    'Emily',
    'Emilie',
    'Grant',
    'Howie',
    'Isabella',
    'Kat',
    'Kimbrad',
    'Kiu',
    'Natasha',
    'Obi',
    'Oscar',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Umberto',
    'Wade',
    'Zhe'
]
const SEINames = (arr) => {
    for (let index = 0; index < arr.length; index++) { //can use for.each method instead for this line
        if (arr[index].length >= 5 && /^[aeiouAEIOU]/.test(arr[index]))
            console.log(arr[index] + ' is ' + arr[index].length + ' letters long')
    }
}
SEINames(students)

