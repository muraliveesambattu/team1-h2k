var someInfo: string | number = 34;
// console.log(someInfo);

function addNumbers(a: number, b: number, c: number = 20): number {
  return a + b + c;
}

const results = addNumbers(2, 3, 100);
console.log(results);

// onclick(event:MouseEvent):void{
//     console.log(event)
// }
