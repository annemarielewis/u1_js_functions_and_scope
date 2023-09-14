//SCOPE:
//"{}"" CREATES LOCAL SCOPE!
{ /* creates block scope */ }
//if { /* creates block scope */ }
//for ( /* ... */ ) { /* creates block scope */ }
//while ( /* ... */ ) { /* creates block scope */ }
//function ( /* ... */ ) { /* creates a function scope */ }

//Scope can only pass from parent to child
//scope cannot be passed child to parent 
//scope cannot be passed sibling to sibling

const name = 'Danny' // this variable is being declared in the "global scope"

{ const name = 'Caleb' }  // this variable is being declared in a "block scope"

console.log(name) // prints 'Danny' because this line is being run in the global scope and NOT the block scope of the program.

// name = 'Caleb' is limited in scope to the block in which it is defined


const myName = "jeremy"
console.log('line 133 ', myName)

{
    const myName = "not jeremy"
    console.log('line 136', myName)
    const shirtColor = 'blue'
}
//myName is local scope so can be use with const again

//IMPORTANT: console.log(shirtColor) //-->this line won't run because shirtColor is in local scope --> the console.log(shirtColor) would have to be within the {} for it to output blue

//a new child. a sibling to the otehr local scope, illustrating the above:
{
    theName = "rhys"
    console.log('line 144', theName)
}