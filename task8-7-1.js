function printInfo(name, age){
    console.log(`Name: ${name}, Age: ${age}`);
}

const person = {
    name: "Evgenii",
    age: 25
}

printInfo.call(person, person.name, person.age);