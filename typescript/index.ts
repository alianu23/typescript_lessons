console.log("TS");

let ab: number = 100;
console.log("a = ", ab);

//permitive type anhdagch

//never unkhown turul +

const n: number = 20;
const b: boolean = true;
const s: string = "Welcome";

console.log("number", n);
console.log("boolean", b);
console.log("string", s);

//object type

const person: object = {
  name: "Naraa",
  age: 25,
};
console.log("OBJECT", person);
//array type

const arr: number[] = [19, 25, 30];
console.log("ARRAY", arr);

//tuple type uurchlugdduggu turul

const tup: [string, number] = ["dell", 19];
console.log("Tuple", tup);

//ENUM type
enum ApprovalStatus {
  approved,
  rejected,
  waiting,
}

const person1 = {
  name: "Saraa",
  age: 25,
  status: ApprovalStatus.rejected,
};

console.log("enum", person1.status === ApprovalStatus.approved);

//Union type
let un: string | number | boolean = "Hello";
console.log("Union", un);

//Alias type
// type StrOrNumOrBool = string | number | boolean = "Hello"

//String literal
let paymentType: "QPay" | "Spay";

//intersection &

// type casting => type convertor
//as || <>

let num = 100;
console.log("Num =", num);
console.log((num as unknown as string).length);

//type infer ugj bga utgaar n ugugdliig todorhoilno
const ss = "Welcome";
let aa = "Welcome";
aa = "kjhg";

//type

type PersonType =
  | {
      firstName: string;
      lastName: string;
      age: number;
    }
  | string;

const p1: PersonType = {
  firstName: "bataa",
  lastName: "Naraa",
  age: 25,
};
console.log("type =", p1);

//interface ==> oop object orienting program function bgaag helj uguh ch f yu hiihiig helku
// 1. abstract - hiiswerlel
// 2. incupsulation - todorhoi hesgiig n haruulj bas nuuh
// 3. inheritance
// 4. polmorfism

interface ICar {
  name: string;

  go: () => {};
}

interface IOperation {
  back: () => {};
  turnRight: () => {};
  turnLeft: () => {};
}

class Car implements ICar, IOperation {
  public name: "Car";
  private price: 2345678;

  constructor() {}
  go: () => {};
  back: () => {};
  turnRight: () => {};
  turnLeft: () => {};
}

const c1 = new Car();
console.log("c1", c1);

// function buthaah utga

function print1(msg: string | number | boolean): void {
  console.log(msg);
}
print1("Hello");
print1(true);
print1(300);

function print2(msg: any) {
  console.log(msg);
}
print2(200);

const p = print1("welcome");
console.log(p);
