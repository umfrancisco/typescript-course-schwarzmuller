
function add(a: number, b: number) {
  return a + b;
}

function log(message: string) {
  console.log(message);
}

function logAndThrow(err: string): never {
  console.log(err);
  throw new Error(err);
}

type Func = (val: string) => void;

function performJob(cb: Func) {
  // ...
  cb("Job done!");
}

performJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: "Max",
  age: 29,
  greet: () => {
    return "Hello";
  }
}

user.greet();
