const promptSync = require('prompt-sync')();

// Questão 01
const temperatureInCelsius = parseFloat(promptSync('Digite uma temperatura em Celcius:'));
const temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;

console.log(`A temperatura em Fahrenheit é: ${temperatureInFahrenheit}ºF`);

// Questão 02
const numberOfVoters = promptSync('Digite o número de eleitores: ');
const numberOfBlankVotes = promptSync('Digite o número de votos em branco: ');
const numberOfNullVotes = promptSync('Digite o número de votos nulos: ');
const numberOfValidVotes = promptSync('Digite o número de votos válidos: ');

const percentageOfBlankVotes = (numberOfBlankVotes / numberOfVoters) * 100;
console.log(`O percentual de votos em branco é: ${percentageOfBlankVotes}%`);
const percentageOfNullVotes = (numberOfNullVotes / numberOfVoters) * 100;
console.log(`O percentual de votos nulos é: ${percentageOfNullVotes}%`);
const percentageOfValidVotes = (numberOfValidVotes / numberOfVoters) * 100;
console.log(`O percentual de votos válidos é: ${percentageOfValidVotes}%`);

// Questão 03
let firstInteger = parseInt(promptSync('Digite o primeiro número inteiro: '));
let secondInteger = parseInt(promptSync('Digite o segundo número inteiro: '));
let thirdInteger = parseInt(promptSync('Digite o terceiro número inteiro: '));
let fourthInteger = parseInt(promptSync('Digite o quarto número inteiro: '));

const sumOfInitialIntegers = firstInteger + secondInteger + thirdInteger;
firstInteger = firstInteger + 25;
secondInteger = secondInteger * 3;
thirdInteger = thirdInteger * 0.12;
console.log(`O primeiro número com 25 adicionado é: ${firstInteger}`);
console.log(`O segundo número triplicado é: ${secondInteger}`);
console.log(`12% do terceiro número é: ${thirdInteger}`);
console.log(`A soma dos 3 primeiros números é: ${sumOfInitialIntegers}`);

// Questão 04
let firstNote = parseFloat(promptSync('Digite a primeira nota: '));
let secondNote = parseFloat(promptSync('Digite a segunda nota: '));
let average = (firstNote + secondNote) / 2;

if(average >= 6) {
  console.log("PARABÉNS! Você foi aprovado.");
}

// Questão 05
firstNote = parseFloat(promptSync('Digite a primeira nota: '));
secondNote = parseFloat(promptSync('Digite a segunda nota: '));
average = (firstNote + secondNote) / 2;

if(average >= 6) {
  console.log("PARABÉNS! Você foi aprovado.");
} else {
  console.log("Você foi REPROVADO! Estude mais.")
}

// Questão 06
const firstSideOfTriangle = parseFloat(promptSync('Digite o primeiro lado do triângulo: '));
const secondSideOfTriangle = parseFloat(promptSync('Digite o segundo lado do triângulo: '));
const thirdSideOfTriangle = parseFloat(promptSync('Digite o terceiro lado do triângulo: '));

if(firstSideOfTriangle + secondSideOfTriangle > thirdSideOfTriangle && firstSideOfTriangle + thirdSideOfTriangle > secondSideOfTriangle && secondSideOfTriangle + thirdSideOfTriangle > firstSideOfTriangle) {
  if(firstSideOfTriangle === secondSideOfTriangle && secondSideOfTriangle === thirdSideOfTriangle) {
    console.log('Triângulo Equilátero');
  } else if(firstSideOfTriangle === secondSideOfTriangle || firstSideOfTriangle === thirdSideOfTriangle || secondSideOfTriangle === thirdSideOfTriangle) {
    console.log('Triângulo Isósceles');
  } else {
    console.log('Triângulo Escaleno');
  }
} else {
  console.log('Não é um triângulo');
}

// Questão 07
const numberOfPurshacedApples = parseInt(promptSync('Digite o número de maçãs compradas: '));

if(numberOfPurshacedApples < 12) {
  console.log(`O valor total é: R$${numberOfPurshacedApples * 0.30}`);
} else {
  console.log(`O valor total é: R$${numberOfPurshacedApples * 0.25}`);
}

// Questão 08
const firstValue = parseFloat(promptSync('Digite o primeiro valor: '));
const secondValue = parseFloat(promptSync('Digite o segundo valor: '));

if(firstValue === secondValue) {
  console.log('Os valores são iguais.');
} else{
  if (firstValue < secondValue) {
    console.log(`Os valores em ordem crescente são: ${firstValue}, ${secondValue}`);
  } else {
    console.log(`Os valores em ordem crescente são: ${secondValue}, ${firstValue}`);
  }
}

// Questão 09
const productOriginCode = parseInt(promptSync('Digite o código de origem do produto: '));

if(productOriginCode === 1) {
  console.log("Produto do Sul")
} else if (productOriginCode === 2) {
  console.log("Produto do Norte")
} else if (productOriginCode === 3) {
  console.log("Produto do Leste")
} else if (productOriginCode === 4) {
  console.log("Produto do Oeste")
} else if (productOriginCode === 5 || productOriginCode === 6) {
  console.log("Produto do Nordeste")
} else if (productOriginCode >= 7 && productOriginCode <= 9) {
  console.log("Produto do Sudeste")
} else if (productOriginCode >= 10 && productOriginCode <= 20) {
  console.log("Produto do Centro-Oeste")
} else if (productOriginCode >= 25 && productOriginCode <= 50) {
  console.log("Produto do Nordeste")
} else {
  console.log("Produto Importado")
}

// Questão 10
const integer = parseInt(promptSync("Digite um número inteiro:"))

for(i = 1; i <= 10; i++) {
  console.log(`${integer}`)
}

// Questão 11
let desiredNumber = parseInt(promptSync('Digite um número inteiro: '));

while(!isNaN(desiredNumber) && desiredNumber >= 0) {
  const isNumberEven = desiredNumber % 2 === 0;

  if(isNumberEven) {
    console.log('Número par');
  } else {
    console.log('Número ímpar');
  }

  desiredNumber = parseInt(promptSync('Digite um número inteiro: '));
}

// Questão 12
for(let i = 1000; i <= 1999; i++) {
  if(i % 11 === 5) {
    console.log(i);
  }
}

// Questão 13
for(let i = 1; i<= 5; i++) {
  let n = parseFloat(promptSync('Digite um número: '));

  for(let j = 1; j <= n; j++) {
    console.log(`${j} * ${n} = ${j * n}`)
  }
}

// Questão 14
let floatNumberToCalculateAverage = parseFloat(promptSync('Digite um número: '));
let sumOfFloatNumbers = 0;
let quantityOfEnteredNumbers = 0;

while(floatNumberToCalculateAverage !== 0) {
  sumOfFloatNumbers += floatNumberToCalculateAverage;
  quantityOfEnteredNumbers++;

  floatNumberToCalculateAverage = parseFloat(promptSync('Digite um número: '));
}

console.log(`A média dos números digitados é: ${sumOfFloatNumbers / quantityOfEnteredNumbers}`)

// Questão 15
let note = parseFloat(promptSync('Digite uma nota: '));
let weight = parseFloat(promptSync('Digite o peso da nota: '));

let sumOfNotes = 0;
let sumOfWeights = 0;

while(note > 0) {
  sumOfNotes += note * weight;
  sumOfWeights += weight;

  note = parseFloat(promptSync('Digite uma nota: '));
  if(note > 0) {
    weight = parseFloat(promptSync('Digite o peso da nota: '));
  }
}

console.log(`A média ponderada das notas é: ${sumOfNotes / sumOfWeights}`);

// Questão 16
let numberOfPrimeNumbers = 0
let numberToVerify = 101

while(numberOfPrimeNumbers <= 50) {
  let divider = 2;
  let isPrimeNumber = true;

  while(divider <= Math.sqrt(numberToVerify)) {
    if(numberToVerify % divider === 0) {
      isPrimeNumber = false;
      break;
    }
    
    divider++;
  }

  if(isPrimeNumber) {
    console.log(numberToVerify);
    numberOfPrimeNumbers++;
  }

  numberToVerify++;
}