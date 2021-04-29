


//10강 값과 변수

const country = 'South Korea';
const continent = 'East Asia';
let POPULATION = 60000000;

console.log(country);
console.log(continent);
console.log(POPULATION);


//12강 자료형

const isIsland = false;
let language; // const language; 라고 선언했을 때 오류남 = 값없는 변수는 let으로 선언!
console.log(typeof isIsland);
console.log(typeof POPULATION);
console.log(typeof country);
console.log(typeof language); // -> 'undefined'


//13강 let const var
language = 'korean';
// const variable이 되어야 하는것? 가변요소 = population, language 정도?
//country = 'japan'; // -> 역시 const값을 바꾸려하니 오류가 뜬다!


//14강 basic operators

let half = POPULATION / 2;
console.log(half);
half++;
console.log(half);
const finland = 6000000;

