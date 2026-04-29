// Exercise 1.3 — Console exploration
console.log("Your Name"); // Replace "Your Name" with your actual name
console.log(7 * 24 * 60); // Minutes in a week
console.log(123 % 10); // Remainder of 123 / 10 is 3

// Exercise 2.4 — Build a personal profile
const firstName = "John";
const lastName = "Doe";
const age = 30;
const city = "Toronto";

const fullName = `<span class="math-placeholder" data-math-id="MATHINLINE0"></span>{lastName}`;
const sentence = `My name is <span class="math-placeholder" data-math-id="MATHINLINE1"></span>{age} years old and I live in ${city}.`;

console.log(sentence);
console.log(fullName.length);
console.log(city.includes("o"));
console.log(fullName.toLowerCase());

// Exercise 3.4 — Temperature converter
const celsiusToFahrenheit = (c) => (c * 9) / 5 + 32;
const fahrenheitToCelsius = (f) => ((f - 32) * 5) / 9;

console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(100));  // 212
console.log(fahrenheitToCelsius(98.6)); // 37

const describeTemp = (c) => {
  const f = celsiusToFahrenheit(c);
  return `<span class="math-placeholder" data-math-id="MATHINLINE2"></span>{f.toFixed(1)}°F`;
};

console.log(describeTemp(37));

// Exercise 4.4 — Multiplication table
function multiTable(base) {
  for (let i = 1; i <= 10; i++) {
    console.log(`<span class="math-placeholder" data-math-id="MATHINLINE3"></span>{i} = ${base * i}`);
  }
}

multiTable(3);
multiTable(7);
multiTable(12);

// Exercise 5.4 — PrimeTime FizzBuzz
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function fizzPrime(n) {
  if (isPrime(n) && n % 3 !== 0 && n % 5 !== 0) return "Prime";
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}

for (let i = 1; i <= 30; i++) {
  console.log(i, fizzPrime(i));
}
