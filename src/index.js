console.info('Hello there!');


console.log("## Private variables and methods ##");
import PrivateData from './PrivateData';
const p = new PrivateData();

console.log(p.greet('John'));
// console.log(p.#privateMethod('John'));
// console.log(p.#invisibleToExtenalEnv);
// console.log(p.invisibleToExtenalEnv);
console.log('\n\n')



/* ## Promise all settled ## */
const p1 = new Promise((res, rej) => setTimeout(res, 100));
const p2 = new Promise((res, rej) => setTimeout(rej, 100));
Promise.allSettled([p1, p2]).then(data => console.log("## Promise all settled ## \n", data, '\n\n'));



console.log("## Nullish Coalescing Operator ##")

let person = {
    profile: {
      name: "",
      age: 0
    }
  };
  
console.log(person.profile.name || "default"); // default
console.log(person.profile.age || 18); // 18

console.log(person.profile.name ?? "default"); // ""
console.log(person.profile.age ?? 18); // 0

console.log('\n\n')



console.log("## Optional Chaining Operator ##")

// console.log(person.profile.reactions.like);
console.log(person.profile?.reactions?.likes);

console.log('\n\n')



console.log("## BigInt ##")

// console.log(person.profile.reactions.like);
const max = Number.MAX_SAFE_INTEGER
console.log(max);

const bigNum = 100000000000000000000000000000n;
console.log(bigNum * 2n);

console.log('\n\n')



console.log("## import dinamico ##")

const doMath = async (num1, num2) => {
    if (num1 && num2) {
      const math = await import('./math.js');
      console.log(math.add(5, 10));
    };
  };
  
  doMath(4, 2);

console.log('\n\n')


console.log("## String.prototype.matchAll ##")
const re = /(Dr\. )\w+/g;
const str = 'Dr. Smith and Dr. Anderson';
const matches = str.matchAll(re);

for (const match of matches) {
  console.log(match);
}



// sources: 
// https://alligator.io/js/es2020/ 
// https://dev.to/shadid12/new-javascript-features-coming-in-2020-that-will-surely-rock-your-world-54b