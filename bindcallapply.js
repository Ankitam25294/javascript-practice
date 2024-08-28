// let name = {
//     firstName: "Ankita",
//     lastName: "Medhekar",
//     printFullName: function () {
//         console.log(this.firstName + " " + this.lastName)
//     }
// }

// name.printFullName();

// let name2 = {
//     firstName: "Gauresh",
//     lastName: "Chaudhari",
// }

// // we can borrow function from other objects using call

// name.printFullName.call(name2);


let name1 = {
    firstName: "Ankita",
    lastName: "Medhekar",
}

let printFullName = function (hometown = "mumbai", state="Maharshtra") {
    console.log(this.firstName + " " + this.lastName + " lives in " + hometown + ", " + state)
}
printFullName.call(name1);

let name2 = {
    firstName: "Gauresh",
    lastName: "Chaudhari",
}

// we can borrow function from other objects using call

printFullName.call(name2, "pune");

// we can also pass multiple arguments to call 
// using apply we just pass and array of arguments

let name3 = {
    firstName: "Devendra",
    lastName: "Fadavnis",
}

printFullName.apply(name3,["Nagpur", "Maharashtra"] );

let name4 = {
    firstName: "John",
    lastName: "Smith",
}

//bind method returns copy of an function binds to given object which can be invoked letter whenever needed instead of calling immediately

let printFullNameCopy = printFullName.bind(name4, "London", "United Kingdom");
printFullNameCopy();
