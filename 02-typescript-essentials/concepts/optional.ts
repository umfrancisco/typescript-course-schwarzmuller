
// value? => optional value
function generateError(msg?: string) {
  throw new Error(msg);
}

type User = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};

let input = "";
// ?? => check if (null or undefined)
const didProvideInput = input ?? false;
console.log(didProvideInput);