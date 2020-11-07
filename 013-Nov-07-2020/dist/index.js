"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created:' + this.name);
    }
    register() {
        console.log(this.name + 'is now registered');
    }
    payInvoice() {
        console.log(this.name + 'paid Invoice');
    }
}
class Member extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice();
    }
}
let Mike = new Member(1, 'Mike Smith', 'mikesmith@gmail.com', 33);
Mike.payInvoice();

