// Basic types
let username: string = "Pedro";
let age: number = 20;
let isAdult: boolean = true;

// Arrays 
let numbersArray: Array<number> = [1, 2, 3];
let numbersArray2: number[] = [1, 2, 3, 4];
let arrayString: Array<string> = ["a", "b", "c"];
let arrayString2: string[] = ["teste1", "Teste2"];

// Objects
let user: {
  name: string,
  age: number, 
  isAdult?: boolean
} = {
  name: "John Doe",
  age: 27,
  isAdult: true
}

function showName(name: string): string {
  return `Hello ${name}`;
}
