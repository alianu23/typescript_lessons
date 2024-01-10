console.log("TS");
var ab = 100;
console.log("a = ", ab);
//permitive type anhdagch
//never unkhown turul +
var n = 20;
var b = true;
var s = "Welcome";
console.log("number", n);
console.log("boolean", b);
console.log("string", s);
//object type
var person = {
    name: "Naraa",
    age: 25,
};
console.log("OBJECT", person);
//array type
var arr = [19, 25, 30];
console.log("ARRAY", arr);
//tuple type uurchlugdduggu turul
var tup = ["dell", 19];
console.log("Tuple", tup);
//ENUM type
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["approved"] = 0] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 1] = "rejected";
    ApprovalStatus[ApprovalStatus["waiting"] = 2] = "waiting";
})(ApprovalStatus || (ApprovalStatus = {}));
var person1 = {
    name: "Saraa",
    age: 25,
    status: ApprovalStatus.rejected,
};
console.log("enum", person1.status === ApprovalStatus.approved);
//Union type
var un = "Hello";
console.log("Union", un);
//Alias type
// type StrOrNumOrBool = string | number | boolean = "Hello"
//String literal
var paymentType;
//intersection &
// type casting => type convertor
//as || <>
var num = 100;
console.log("Num =", num);
console.log(num.length);
//type infer ugj bga utgaar n ugugdliig todorhoilno
var ss = "Welcome";
var aa = "Welcome";
aa = "kjhg";
var p1 = {
    firstName: "bataa",
    lastName: "Naraa",
    age: 25,
};
console.log("type =", p1);
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var c1 = new Car();
console.log("c1", c1);
// function buthaah utga
function print1(msg) {
    console.log(msg);
}
print1("Hello");
print1(true);
print1(300);
function print2(msg) {
    console.log(msg);
}
print2(200);
var p = print1("welcome");
console.log(p);
