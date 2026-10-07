// defining types for variables
let username: string;

username = "Abe";
console.log(username);

// working with functions
function add(a: number, b = 5) {
  return a + b;
}

add(10);
add(10, 2);

// bad solution
let age: any = 25;
age = "32";
age = {};
age = [];

// good solution, union types
let num: string | number = 10;
num = "20";
// num = []; // error

// arrays and objects
let hobbies = ["sports", "cooking"];
// hobbies.push(10) // error

// union types using arrays
let users: (string | number)[];
users = [1, "Abe"];
users = [2, 1];
users = ["Ann", "Bob"];

// using interface Array
let friends: Array<string | number>;
friends = ["Abe", "Ann"];

// tuples
let possibleResults: [number, number];

possibleResults = [1, -1];
// possibleResults = [1, 2, 2]; // error

// using custom types and objects
type User = {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  }
}

let user: User = {
  name: "Abe",
  age: 26,
  hobbies: ["sports", "cooking"],
  role: {
    description: "admin",
    id: 5
  }
};

let val: {} = "is a value";

let data: Record<string, string | number>;
data = {
  entry: "hello world",
  num: 25
};

// enums

enum Role {
  Admin,
  Editor,
  Guest
}
let userRole: Role = Role.Admin;
userRole = Role.Guest;
