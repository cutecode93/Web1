/* 10강
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');

console.log('jonas');
console.log(23);
let firstName = 'Jonas';
console.log(firstName);

let jonas_matilda = "jm";
let $function = 27;
let Person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'programmer';
let myCurrentJob = 'teacher';

console.log(myFirstJob);
*/

/*
낙타 대문자(駱駝大文字, Upper camel case)는 프로그래밍에서 파일, 변수, 함수 등 대상의 이름을 띄어쓰기 없이 짓기 위하여 따르는 관례인 네이밍컨벤션(Naming convention)의 하나다.

낙타 대문자(駱駝大文字, Upper camel case)에서는 단어 전체적으로 소문자를 사용하지만, 각 합성어의 첫 글자만 대문자로 표기한다. 합성한 단어의 모양이 쌍봉낙타의 등과 비슷하다는 뜻에서 이름붙었다.

**lower 카멜 케이스 (lowerCamelCase)
EX) camelCase, backgroundColor, className
단봉낙타 표기법이라고도 한다.
보통 카멜 케이스라고 하면 lower 카멜 케이스를 의미한다.
각 단어의 첫 문자를 대문자로 표시하되, 이름의 첫 문자는 소문자로 적는다.
*/





/* 12강

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
*/


//13강 : 필기만O 코드없음 


/* 14강
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x--;
x++;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);
*/


/*15강
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(ageJonas, ageSarah);
const averageAge = (ageJonas + ageSarah) / 2
console.log(averageAge);


//17강
const firstName = 'Jonas';
const job = 'teacher';
//const birthYear = 1991;
const year = 2037;

//const jonas = 'I m ' + firstName + ', a ' + (year - birthYear) + 'years old ' + job;
console.log(jonas);

//const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...
lolol
lol`)
*/


//18강
const age = 30;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log('Sarah can start driving license.')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 1991;
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}

// 위의 경우 if/else 블록 안에서 선언된 변수는, 블록 밖에서 사용할 수 없음
// but 아래의 경우, 블록 안팎으로 변수를 사용할 수 있음

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);