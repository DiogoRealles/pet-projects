// // INTRO
// const firstname1: string = "Diogo";
// const lastname1: string = "Realles";
// const fullname1: string = `${firstname1} ${lastname1}`;

// console.log(fullname1); // Diogo Realles

// // NUMBERS
// const age: number = 34;
// const cold: number = -16;
// const price: number = 19.75;
// const balance: number = -247.03;

// console.log(age); // 34
// console.log(cold); // -16
// console.log(price); // 19.75
// console.log(balance); // -247.03

// // STRINGS
// const firstname2: string = "Diogo";
// const lastname2: string = "Realles";
// const nicname2: string = `Diogro`;

// console.log(firstname2); // Diogo
// console.log(lastname2); // Realles
// console.log(nicname2); // Diogro

// // BOOLEANS
// const isOpen: boolean = false;
// const isLoading: boolean = !false;
// const biggest10: boolean = 10 > 5;
// const lorem: boolean = isOpen ? true : false;

// console.log(isOpen); // false
// console.log(isLoading); // true
// console.log(biggest10); // true
// console.log(lorem); // false

// // ARRAY NUMBER | STRING | BOOLEAN
// const arrNumber: number[] = [54, 5.7, -192, -7.9];
// const arrString: string[] = ["Gears", "Forza", "Son of Rome"];
// const arrBoolean: boolean[] = [10 > 5, false, true];
// const arrTuple: [number, string, boolean] = [2002, "Halo 5", true];

// console.log(arrNumber); // false
// console.log(arrString); // true
// console.log(arrBoolean); // true
// console.log(arrTuple); // [2002, "Halo 5", true]

// FUNCTION NUMBER | STRING | BOOLEAN
// function sum(n1: number, n2: number): number {
//   return n1 + n2;
// }
// console.log(sum(7, 9)); // 16

// function greeting(greet: string, name: string = "convidado"): string {
//   return greet + name;
// }
// console.log(greeting("Seja bem vindo sr: ", "Diogo")); // Seja bem vindo sr: Diogo

// function isLoading(statusLoading: boolean) {
//   if (statusLoading) {
//     return "Loading...";
//   } else {
//     return "Loaded.";
//   }
// }

// console.log(isLoading(false)); // Loaded

// // OBJECTS
// type TCarType = {
//   color: string;
//   wheels: number;
//   run: () => void;
// };

// const car = {
//   color: "red",
//   wheels: 4,
//   run() {
//     return "Vruunn...";
//   },
// };
// console.log(car.color); // red
// console.log(car.wheels); // 4
// console.log(car.run()); // Vruunn...

// const gameObj: {
//   name: string;
//   plataform: string;
// } = {
//   name: "God of War",
//   plataform: "PlayStation",
// };
// console.log(gameObj.name); // God of War
// console.log(gameObj.plataform); // PlayStation

// // UNION TYPE
// const numHouse: string | number = 100;
// const numHouse2: string | number = "100B";

// console.log(numHouse); // 100
// console.log(numHouse2); // 100B

// // TYPE ALIAS
// type TIdType = string | number;
// function showId(id: TIdType) {
//   console.log(`Id: ${id}`);
// }

// showId(1); // Id: 1
// showId("Admin59"); // Id: Admin59

// // INTERFACES
// interface ICarProps {
//   color: string;
//   wheels: number;
//   run: () => void;
// }

// const car2: ICarProps = {
//   color: "blue",
//   wheels: 3,
//   run() {
//     return "Vruunn...";
//   },
// };
// console.log(car2.color); // blue
// console.log(car2.wheels); // 3
// console.log(car2.run()); // Vruunn...

// interface IProductProps {
//   name: string;
//   price: number;
//   isAvailable: boolean;
// }

// function showProductDetails(product: IProductProps) {
//   console.log(`Produto: ${product.name}, Preço: R$ ${product.price}`);

//   if (!product.isAvailable) {
//     console.log("Produto indisponível");
//   }
// }

// const notebook: IProductProps = {
//   name: "Notebook Accer",
//   price: 1999,
//   isAvailable: true,
// };

// showProductDetails(notebook); // Produto: Notebook Accer, Preço: R$ 1999

// // LITERAL TYPES
// function showDirection(direction: "left" | "center" | "right") {
//   return `A direção é: ${direction}`;
// }
// console.log(showDirection("left")); // A direção é: left
// console.log(showDirection("center")); // A direção é: center
// console.log(showDirection("right")); // A direção é: right

// // NOT-NULL
// const buttonClose = document.querySelector("#btn-close");
// buttonClose!.innerHTML = "X";

// // NARROWING
// const tipo = "Homem";

// function checkValue() {
//   if (tipo === "Homem") {
//     console.log("Homem!");
//   } else {
//     console.log("Mulher");
//   }
// }

// console.log(tipo); // Homem

// // TYPE GUARD
// function sum(n1: number | string, n2: number | string) {
//   if (typeof n1 === "string" && typeof n2 === "string") {
//     console.log(Number(n1) + Number(n2));
//   } else if (typeof n1 === "number" && typeof n2 === "number") {
//     console.log(n1 + n2);
//   } else {
//     console.log("Impossível realizar a soma!");
//   }
// }

// sum("4", "59"); // 63
// sum(12, 42.3); // 54.3

// // FUNCTION VOID
// function withoutReturn(): void {
//   console.log("Função sem retorno!");
// }

// withoutReturn(); // Função sem retorno!

// // GENERIC FUNCTION
// function firstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// console.log(firstElement([1, 37, 95, 72])); // 1
// console.log(firstElement(["apple", "grapefruit", "strawberry"])); // apple

// function mergeObjects<U, T>(obj1: U, obj2: T) {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// }
// const newObj = mergeObjects({ name: "Diogo" }, { age: 34, job: "Front-end" });
// console.log(newObj); // { name: 'Diogo', age: 34, job: 'Front-end' }

// // // GENERIC FUNCTION - CONSTRAINTS
// function biggestNumber<T extends number | string>(n1: T, n2: T) {
//   let biggest: T;

//   if (+n1 > +n2) {
//     biggest = n1;
//   } else {
//     biggest = n2;
//   }

//   return biggest;
// }

// console.log(biggestNumber(9, 74)); // 74
// console.log(biggestNumber("14", "6")); // 14

// // Especificando tipos de argumentos
// function mergeArrays<T>(arr1: T[], arr2: T[]) {
//   return arr1.concat(arr2);
// }
// console.log(mergeArrays([1, 2, 3], [4, 5])); // [1, 2, 3], [4, 5]
// console.log(mergeArrays<number | string>([1, 2, 3], ["apple", "orange"])); // [1, 2, 3], ["apple", "orange"]

// // REST OPERATOR
// function summAll(...nums: number[]) {
//   return nums.reduce((acc, cur) => cur + acc);
// }
// console.log(summAll(1, 2, 3)); // 6

// DESTRUCTURING
// function showProductDetails({
//   name,
//   price,
// }: {
//   name: string;
//   price: number;
// }): string {
//   return `Produto: ${name}, Preço: ${price}`;
// }
// const shirt = {
//   name: "Camisa",
//   price: 19.99,
// };
// console.log(showProductDetails(shirt)); // Produto: Camisa, Preço: 19.99
