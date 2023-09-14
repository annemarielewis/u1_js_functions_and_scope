//ARRAY ITERATORS

// for.Each()
// map()
// filter()
// find()
// Reduce()


// array methods: for each iterates throughe ach element of an array (like a for loop, but will always do EVERY element)
const birds = ['turkey', 'chicken', 'falcon', 'ostrich']

birds.forEach((bird) => console.log(bird))

//or
birds.forEach(function(bird) {
    console.log(bird);
});

//or
function logbird(bird) {
    console.log(bird);
}
birds.forEach(logbird)

//array methods: array of objects can be mapped! map makes a brand new array with functionality: returns an array

const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordLengths = words.map((word) => {
    return word.length
})
words.map((word) => console.log(word.length))

//why are array methods put in the parameter section of an arrow function?
//reason: "word" is the only parameter (within the (). we can put a method onto that parameter in the parameter section of the arrow function just fine!)