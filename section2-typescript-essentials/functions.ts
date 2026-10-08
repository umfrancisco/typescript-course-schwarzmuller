
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

