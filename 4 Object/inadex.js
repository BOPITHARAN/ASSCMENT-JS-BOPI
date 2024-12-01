let name = "pavatha";
let age = 30;
let gender = "Female";
let address = "Raththinapuram kilinochchi ";



// Object
let person = {
    name: "pavatha",
    age: 30,
    gender: "Female",
    address: "Raththinapuram kilinochchi "
}
console.log(person)

// change value..>>>>
person.age = 24
// ..................


// Accessing Methort..............................................
// Dot notating
console.log(person.name)

// Bracket Notation
console.log(person['gender'])

// .......................... sub object...........................


let person = {
    name: "pavatha",
    age: 30,
    gender: "Female",
    address: "Raththinapuram kilinochchi ",
    sibling: {
        brother: "Abishek Shankar",
        sister: "Trisha Shankar"
    }
} // Object
// Dot Notation
console.log(person.sibling.brother)


// Add new Value in Object..........................
// objectName.keyName=value;

person.origij = "srilankan";

// delete values in Object
delete person.firstname;
