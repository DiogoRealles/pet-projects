# TypeScript

# O que é TypeScript?

TypeScript é um supertset para JavaScript, ou seja, adiciona funcionalidades extras a linguagem JavaScript, como tipagem estática, prevenção de bugs, aplicações mais seguras. <br>
Pode ser utilizado com frameworks/libs como Express, React e etc. <br>
Precisa ser compilado em JS. <br>

# Instalando typescript global

<pre>
  <code>
    npm i typescript -g

    tsc -v;
  </code>
</pre>

# Compilando TS em JS

Browsers e NodeJS não entendem TS, sendo necessário compilar TS em JS. Passando o caminho + nome do arquivo a ser compilado. <br>
É possível indicar automaticamente a pasta de entrada e a pasta de saida dos arquivos TS e JS. <br>

<pre>
  <code>
    // script:
    "watch-ts": "tsc --watch ./index.ts",
    "watch-js": "node --watch ./index.js"
  </code>
</pre>

# TypeScript possui arquivo de config.

Comando para gerar o arquivo de config. do TS. <br>
Nele é possível configurar arquivo de entrada TS e de saida JS. <br>
Impedir de compilar com erro. <br>
Definir versões de compilação do JS (ES5, ES6, ESNext, etc). <br>
Definir tipo de export e import (module.exports / require, export / import). <br>

<pre>
  <code>
    tsc --init;
  </code>
</pre>

# Tipagem estática & Tipagem por inferência

TypeScript permite tipar as variáveis explicitamente determinando os tipos de dados. <br>
É possível deixar o próprio TS tipar as variáveis através dos tipos informados. <br>

<pre>
  <code>
    const firstname: string = "Diogo"
    const lastname: string = "Realles"
    const fullname: string = firstname + lastname
    
    console.log(fullname); Diogo Realles

    const brandCar = "Ford";
    console.log(brandCar); // Form
    console.log(typeof brandCar); // string
  </code>
</pre>

# Tipos Primitivos

<!-- NUMBER -->

<pre>
  <code>
    const age: number = 34;
    const cold: number = -16;
    const price: number = 19.75;
    const balance: number = -247.03;

    console.log(age); // 34
    console.log(cold); // -16
    console.log(price); // 19.75
    console.log(balance); // -247.03
  </code>
</pre>

<!-- STRINGS -->

<pre>
  <code>
    const firstname2: string = "Diogo";
    const lastname2: string = "Realles";
    const nicname2: string = `Diogro`;

    console.log(firstname2); // Diogo
    console.log(lastname2); // Realles
    console.log(nicname2); // Diogro
  </code>
</pre>

<!-- BOOLEAN -->

<pre>
  <code>
    const isOpen: boolean = false;
    const isLoading: boolean = !false;
    const biggest10: boolean = 10 > 5;
    const lorem: boolean = isOpen ? true : false;

    console.log(isOpen); // false
    console.log(isLoading); // true
    console.log(biggest10); // true
    console.log(lorem); // false
  </code>
</pre>

<!-- ARRAY NUMBER | STRING | BOOLEAN | TUPLE-->

<pre>
  <code>
    const arrNumber: number[] = [54, 5.7, -192, -7.9];
    const arrString: string[] = ["Gears", "Forza", "Son of Rome"]
    const arrBoolean: boolean[] = [10 > 5, false, true];
    const arrTuple: [number, string, boolean] = [2002, "Halo 5", true];

    console.log(arrNumber); // false
    console.log(arrString); // true
    console.log(arrBoolean); // true
    console.log(arrTuple); // [2002, "Halo 5", true]
  </code>
</pre>

# Tipos de parâmetros e retornos

TS permite tipar os parâmetros das funções e seu retono, ou seja, quais tipos vão entrar e qual tipo de saída. <br>

<pre>
  <code>
    function sum(n1: number, n2: number): number {
      return n1 + n2;
    }
    console.log(sum(7, 9)); // 16

    function greeting(greet: string, name: string = "convidado"): string {
      return greet + name;
    }
    console.log(greeting("Seja bem vindo sr: ", "Diogo")); // Seja bem vindo sr: Diogo

    function isLoading(statusLoading: boolean) {
      if (statusLoading) {
        return "Loading...";
      } else {
        return "Loaded.";
      }
    }

    console.log(isLoading(false)); // Loaded
  </code>
</pre>

# Union Type

É possível determinar 2 tipos ou mais para uma variável. <br>

<pre>
  <code>
    const numHouse: string | number = 100;
    const numHouse2: string | number = "100B";

    console.log(numHouse); // 100
    console.log(numHouse2); // 100B
  </code>
</pre>

# Type Alias

É um recurso que permite criar um tipo e determinar o que ele significa. É uma maneira de chama-lo em vez de criar expressões complexas com Union Type. <br>

# Interface

Outra maneira de nomear um tipo e as propriedades de um objeto. <br>

<pre>
  <code>
    type TIdType = string | number;
    function showId(id: TIdType) {
      console.log(`Id: ${id}`);
    }

    showId(1); // Id: 1
    showId("Admin59"); // Id: Admin59
    
    interface ICarProps {
      color: string;
      wheels: number;
      run: () => void;
    }

    const car2 = {
      color: "blue",
      wheels: 3,
      run() {
        return "Vruunn...";
      },
    };
    console.log(car2.color); // blue
    console.log(car2.wheels); // 3
    console.log(car2.run()); // Vruunn...
  </code>
</pre>

# Literal Types

É um recurso que permite colocar valores como tipos. Isso permite usar os tipos e os valores.

<pre>
  <code>
    function showDirection(direction: "left" | "center" | "right") {
      return `A direção é: ${direction}`;
    }
    console.log(showDirection("left")); // A direção é: left
    console.log(showDirection("center")); // A direção é: center
    console.log(showDirection("right")); // A direção é: right
  </code>
</pre>

# Non-null Assertion Operator

TS pode evidenciar um erro, baseado em um valor que ainda não está disponível no código. <br>
Porém caso esse dado ficará disponível, é possível evitar o erro prematuro utilizando exclamação (!). <br>

<pre>
  <code>
    const buttonClose = document.querySelector("#btn-close");
    buttonClose!.innerHTML = "X";
  </code>
</pre>

# Narrowing

É um recurso / técnica para identificar tipos de dados, dando uma direção diferente a execução do programa baseado no tipo de dado identificado. <br>

<pre>
  <code>
    const tipo = "Homem";

    function checkValue() {
      if (tipo === "Homem") {
        console.log("Homem!");
      } else {
        console.log("Mulher");
      }
    }

    console.log(tipo); // Homem
  </code>
</pre>

# Type Guard

lorem. <br>

<pre>
  <code>
    function sum(n1: number | string, n2: number | string) {
      if (typeof n1 === "string" && typeof n2 === "string") {
        console.log(Number(n1) + Number(n2));
      } else if (typeof n1 === "number" && typeof n2 === "number") {
        console.log(n1 + n2);
      } else {
        console.log("Impossível realizar a soma!");
      }
    }

    sum("4", "59"); // 63
    sum(12, 42.3); // 54.3
  </code>
</pre>

# Function void

Função sem retorno utiliza o tipo void, que indica ao TS ue não tem um valor d retorno. <br>
Ex: setTimeout, etc. <br>

<pre>
  <code>
    function withoutReturn(): void {
      console.log("Função sem retorno!");
    }

    withoutReturn(); // Função sem retorno!
  </code>
</pre>

# Generic Function

É uma estratégia para quando o tipo de retorn é relacionado ao tipo do argumento. Então não sabemos previamente o tipo de dado que entrará na função. <br>
ex: array number, string, boolean, etc. Normalmente são utilizados letras T (type) ou U (unknow) para definir generics. <br>

<pre>
  <code>
    function firstElement<T>(arr: T[]): T {
      return arr[0];
    }

    console.log(firstElement([1, 37, 95, 72])); // 1
    console.log(firstElement(["apple", "grapefruit", "strawberry"])); // apple

    function mergeObjects<U, T>(obj1: U, obj2: T) {
      return {
        ...obj1,
        ...obj2,
      };
    }
    const newObj = mergeObjects({ name: "Diogo" }, { age: 34, job: "Front-end" });
    console.log(newObj); // { name: 'Diogo', age: 34, job: 'Front-end' }
  </code>
</pre>

# Constraint nas Generic Functions

As generic functions podem ter seu escopo reduzido por constraints. Basicamente limitando os tipos que podem ser utilizados no Generic. Diminuindo a abrangencia do escopo de generics. <br>

. <br>

<pre>
  <code>
    function biggestNumber<T extends number | string>(n1: T, n2: T) {
      let biggest: T;

      if (+n1 > +n2) {
        biggest = n1;
      } else {
        biggest = n2;
      }

      return biggest;
    }

    console.log(biggestNumber(9, 74)); // 74
    console.log(biggestNumber("14", "6")); // 14
  </code>
</pre>

# Title

. <br>

<pre>
  <code>
  </code>
</pre>
