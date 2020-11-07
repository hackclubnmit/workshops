var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created:' + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + 'is now registered');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + 'paid Invoice');
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var Mike = new Member(1, 'Mike Smith', 'mikesmith@gmail.com', 33);
Mike.payInvoice();
