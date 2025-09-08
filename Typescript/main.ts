// console.log("Hello Typescript !!!");

// var myname: string = "45";
// var greeting: string = "Welcome to Type Script !!!";
// var userCount: number = 45;
// var isLoading: boolean = true;
// var scores: number[] = [34, 38, 89];

function greet(user: string) {
  console.log(`Hello ${user}`);
  return `Hello ${user}`;
}
var result: string = greet("Murali ");
console.log(result);

function total(a:number, b:number) {
  return a + b;
}

var sum = total(10,20);
console.log(sum)
