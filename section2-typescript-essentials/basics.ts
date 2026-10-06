let username: string;
let age = 25;

username = "John";
console.log(username);

function add(a: number, b = 5) {
  return a + b;
}

add(10);
add(10, 2);
