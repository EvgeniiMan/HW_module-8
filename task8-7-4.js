const setFullName  = function (name) {
    this.fullName = name;
}

const person = {
    fullName: "Darth Wader",
}

console.log(person.fullName);
const setPersonFullName = setFullName.bind(person, "John Smith")();      
console.log(person.fullName);