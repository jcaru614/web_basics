const express = require('express')
const app = express();
var faker = require('faker');


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

class User {
    constructor() {
        this.id = faker.random.uuid();
        this.first_name = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.random.alphaNumeric();
    }
}
console.log(new User());

class Company {
    constructor() {
        this.id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
console.log(new Company());


app.get("/api/users/new", (req, res) => {
    res.send(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.send(new Company());
});

app.get("/api/user/company", (req, res) => {
    let user = new User()
    let company = new Company()
    res.send({user, company});
});