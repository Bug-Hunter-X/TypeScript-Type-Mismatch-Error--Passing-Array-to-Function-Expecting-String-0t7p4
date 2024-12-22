function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane Doe";
console.log(greeter(user)); //Corrected

//Alternative Solution handling the array
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let userArray = ["Jane", "Doe"];
console.log(greeterArray(userArray)); //Corrected