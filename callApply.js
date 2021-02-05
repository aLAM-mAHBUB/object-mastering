const normalPerson = {
    firstName: "Rahim",
    lastName: "Bhuiyan",
    salary: 15000,
    getFullName: function () {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    },
};

console.log(normalPerson.getFullName());
console.log(normalPerson.chargeBill(1000));
console.log(normalPerson.chargeBill(500));

console.log(normalPerson.salary);
