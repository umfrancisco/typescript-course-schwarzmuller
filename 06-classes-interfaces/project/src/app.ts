
class User {
  readonly hobbies: string[] = [];
  readonly createdAt: Date = new Date();

  constructor(private name: string = "John Doe", public age: number = 23) {

  }

  greet() {
    console.log("hello, "+this.name);
  }
}

const john = new User();
john.hobbies.push("C", "C++");

const fred = new User("Fred H.", 32);
fred.hobbies.push("Python", "SQL");

// console.log(john, fred);

class NetUser {

  constructor(private firstName: string, private lastName: string) {

  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const bob = new NetUser("John", "Doe");
bob;
// console.log(bob, bob.fullName);

class WebUser {
  protected _firstName: string = "";
  private _lastName: string = "";

  set firstName(firstName: string) {
    if (firstName.trim() === "") {
      throw new Error("Invalid name");
    }
    this._firstName = firstName;
  }

  set lastName(lastName: string) {
    if (lastName.trim() === "") {
      throw new Error("Invalid name");
    }
    this._lastName = lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  static eid = "USER";

  static greet() {
    console.log("hello typescript");
  }
}

const abe = new WebUser();
abe.firstName = "Abe";
abe.lastName = "K.";
// console.log(abe, abe.fullName);

// WebUser.greet();
// console.log(WebUser.eid);

class Employee extends WebUser {

  constructor(public jobTitle: string) {
    super();
  }

  work() {
    console.log(this._firstName + " is working");
  }
}

const bea = new Employee("Developer");
bea.firstName = "bea";
// bea.work();

abstract class UIElement{
  
  constructor(public identifier: string) {

  }

  clone(target: string) {
    console.log("CLONE => "+target);
  }
}

class SideDrawerElement extends UIElement {
  
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }
}

const sde = new SideDrawerElement("ASD", "right");
sde;
// sde.clone("src");

interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// as a object type
let authUser: Authenticatable = {
  email: "hello@email.com",
  password: "1234",
  login() {},
  logout() {}
};


// as a implementation
class AuthUser implements Authenticatable {

  constructor(public email: string, public password: string) {

  }

  login(): void {
    
  }

  logout(): void {

  }
}
