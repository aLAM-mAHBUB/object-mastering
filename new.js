class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person("Hero", "Alom", 25000);
const friendlyPerson = new Person("Jakir", "Ahamed", 30000);
console.log(heroPerson);
console.log(friendlyPerson);

// old style of creating object by using function
function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person1("Grand", "Papa", 2000);
console.log(oldPerson);
