const user = {
    name: "John",
    years: 30,
};

const {
    name: name,
    years: age,
    isAdmin = false
} = user;

console.log(name);
console.log(age);
console.log(isAdmin);