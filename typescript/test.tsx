//ugugdliin turluud dynamic
//strong type : C++, Java, C# ymr turultei bhiig zaaj ugdug
//ugugdliin turliig ram deer hadgaladag buyu hemjeeg zaaj ugj boldog gedgiig todorhoildog
// v8 engine ts iig shuud tanidgui bolhoor jv ruu hurvuj ajildag - react
//ts iig jx ruu hurvuulne ts confile

let too: number = 15;

let a: string = "blue";

too = 30;

let too1: number;
too1 = 12;

let firstName: string;

let obj = {
  firstName: "bolor",
  age: 15,
};

firstName = obj.firstName;

let isCheck: boolean = true;

//object hiih interface command objectiin turliig zaaj uguh zaaj ugsun tohioldold zaaval zuv bichih yostoi
//object type :
//1. interface
//2. type
interface productType {
  name: string;
  age: number;
}
let student: productType = {
  name: "boldo",
  age: 15,
};
let lastName: string = student.name;
// object type turul
type StudentInfoType = {
  name: string;
  age: number;
};
let student1: StudentInfoType = {
  name: "boldo",
  age: 15,
};
let lastName1: string = student.name;

// function - neg functiontai
const doSomething: () => string = () => {
  return "abc";
};

// function - butsaah yum n yu b hiig zaaj bga
const doSomethingto = (): string => {
  return "abc";
};

// function function dotor type zaah

let regNum = "zl232323";
let myname = "name";

const outerRegister = (myname: string, regNum: string): string => {
  const gender =
    Number(regNum[regNum[regNum.length - 1]]) % 2 == 1 ? "Male" : "Female";
  return "success";
};

const register = (gender, name, register) => {
  return "success";
};
// Optional type

interface ClassType {
  studentNumbers: number;
  teachName?: string;
}

const Leap23: ClassType = {
  studentNumbers: 12,
};
const Leap24: ClassType = {
  studentNumbers: 13,
  teachName: "Bold",
};

//union type type todorhoilj bga tohioldold | zuraas
// gender: "MALE" | "female"

type CountryType = "US" | "Uk" | "MN";

interface ClassesType {
  studentsNumbers: number;
  teachNames?: string;
  country: CountryType;
}
