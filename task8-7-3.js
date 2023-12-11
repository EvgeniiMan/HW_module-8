const users = [
    { name: "Денис", age: 28 },
    { name: "Дмитрий", age: 31 },
    { name: "Евгений", age: 5 },
    { name: "Александр", age: 10 }
];

const filteredUsers = users.filter( (user) => user.age >= 18 );
const filteredUsersNames = filteredUsers.map( (user) => user.name );

console.log(filteredUsers);
console.log(filteredUsersNames);