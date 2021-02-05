const normalPerson = {
    firstName: "Rahim",
    lastName: "Bhuiyan",
    salary: 15000,
    getFullName: function () {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    },
    chargeBill: function (amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    },
};

const heroPerson = {
    firstName: "Hero",
    lastName: "Alom",
    salary: 25000,
};

const friendlyPerson = {
    firstName: "Qoushick",
    lastName: "Ahamed",
    salary: 20000,
};

// console.log(normalPerson);
// bind method
// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// heroBillCharge(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1000);
// console.log(friendlyPerson.salary);

// call method
// normalPerson.chargeBill.call(heroPerson, 1000, 200, 100);
// normalPerson.chargeBill.call(heroPerson, 900, 500, 50);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 100);
// console.log(friendlyPerson.salary);

// apply method

normalPerson.chargeBill.apply(heroPerson, [5000, 500, 50]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40]);

console.log(heroPerson.salary);
