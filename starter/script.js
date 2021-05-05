


// //32강
// 'use strict';

// let hasDruversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;





// //33강
// function logger() {
//     console.log('My name is Jonas');
// }


// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');





// // 34강
// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

// // function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);


// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear; // anonymous function(function without name) = function expression => produces value
// } // then, calcAge2 itself is a function now!
// const age2 = calcAge2(1991);

// console.log(age1, age2);






// 35강

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`; //arrow function라도 중괄호를 써야하는 경우는, return을 생략할 수 없다. 
// }

// console.log(yearUntilRetirement(1991, 'jonas'));
// console.log(yearUntilRetirement(1980, 'Bob'));





// //36강

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));





// //37강

// // const calcAge = function (birthYear) { //이 함수의 birthYear과, 아래 함수의 birthYear은 완전히 다른 두 매개변수
// //     // that means, 매개변수는 로컬 변수이다
// //     return 2037 - birthYear;
// // }

// // const yearsUntilRetirement = function (birthYear, firstName) {
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //         console.log(`${firstName} retires in ${retirement} years`);
// //         return retirement;
// //     } else {
// //         console.log(`${firstName} has already retired`);
// //         return -1; // 아무뜻없음 
// //     }

// //     // return `${firstName} retires in ${retirement} years`; //arrow function라도 중괄호를 써야하는 경우는, return을 생략할 수 없다. 
// // }

// // console.log(yearsUntilRetirement(1991, 'Jonas'));
// // console.log(yearsUntilRetirement(1950, 'Mike'));




// //39강

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // -> 매우 번거롭고 구구절절하다. 이 때 쓸 수 있는것이 Arrays

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]) //마지막 요소의 인덱스 얻기

// friends[2] = 'Jay';
// console.log(friends);

// // 여기서 드는 의문: const로 선언된 friends인데 어째서 값이 변경될 수 있는가?
// // 해답: const로 선언된 "primitive" 값은 변경될 수 없다. 그러나 Array는 primitive 값이 아니라서 변경가능함

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]; //변수도 넣을 수 있고, 다른 배열도 통째로 넣을 수 있다
// console.log(jonas);

// //Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years)); // 이런식으로 하면 안됨. 결과는 NaN으로 나옴

// //함수 매개변수로 배열 값 가져오기
// const age1 = calcAge(years[0]); // 1번 방식
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// //새로운 배열 만들어서 함수 대입시키기
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])] // 2번 방식 
// console.log(ages);




//40강

// const friends = ['Michael', 'Steven', 'Peter']

// //add elements
// friends.push('Jay');
// const newlength = friends.push('Chris');
// console.log(newlength);

// friends.unshift('John');
// console.log(friends);

// //remove elements
// friends.pop(); // removing Last element
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.unshift(); // removing first element
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23')); // 이게 false로 나오는 이유? strict하게 판단되므로 type coercion이 일어나지 않음
// console.log(friends.includes(23)); // 이건 true임 - 정확히 같은 type이므로 

// if (friends.includes('Peter')); {
//     console.log('You have a friend called Peter');
// }


// //42강

// const jonasArray = [
//     'Jonas',
//     'Schemedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schemedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };



// //43강
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// //console.log(jonas.'last' + nameKey); //오류!!

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonas.interestedIn); // Dot notation => 작동안함! ( undefined )
// console.log(jonas[interestedIn]); // Bracket notation에서는 'const interestedIn' 값을 대입하여 계산해주기 때문에 작동함!

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschemedtmann';
// console.log(jonas);


// //challenge
// // "Jonas has 3 friends, and his best friend is called Michael"

// console.log(`
// ${jonas.firstName} has ${jonas.friends['length']} friends, and hist best friend is called ${jonas.friends[0]}`) //내정답
// console.log(`
// ${jonas.firstName} has ${jonas.friends.length} friends, and hist best friend is called ${jonas.friends[0]}`) //조나쓰정답
// // DOT와 BRACKET 모두 LET-TO-RIGHT 으로 읽기 때문에 jonas.friends.length의 경우 jonas.friends 먼저 읽고 그다음 friends.length(3)을 읽어서 결과값이 3이 되는 것


//우와 맞춰따 나천잰가(???)




// 43강


// calcAge: function (birthYear) {  --------> 1. 가장 원시적 방법
//     return 2037 - birthYear; // 이 때 함수는 반드시 표현형(function expressions)이어야함
//}
// calcAge: function () { --------> 2. this 를 사용하여 DRY 원칙을 지키는 진화된 방법
//     //console.log(this);
//     return 2037 - this.birthYear;
//}








const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {  --------> 1. 가장 원시적 방법
    //     return 2037 - birthYear; // 이 때 함수는 반드시 표현형(function expressions)이어야함
    //}
    // calcAge: function () { --------> 2. this 를 사용하여 DRY 원칙을 지키는 진화된 방법
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    //
    calcAge: function () { // --------> 3. this 를 사용 + this.age 라는 프로퍼티를 함수안에서 바로 만들어내는 멋진 방법
        this.age = 2037 - this.birthYear;
        return this.age;
    }, // 프로퍼티 사이에 콤마 꼭!! 붙일것!!
    getSummary: function () {                           //challenge 내 답) turnary구문 쓸줄몰라서+this.age 써버려서 틀림.. ++++ if구문이 작동은 하는듯? 근데 너무 장황함 
        if (this.hasDriversLicense) {
            this.License = 'a'
        } else {
            this.License = 'No'
        }
        console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.License} driver's license.`);
    },
    getSummary: function () {                          //challenge 조나스 답
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'No'} driver's license.`
    }
}



// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }


// console.log(jonas2.calcAge()); // 이런식으로 birthYear인 1991을 계속 반복하여 쓰는것은 바람직하지 않음-> DRY 원칙 위반
// // 이 경우에 1991을 직접 쓰지않고, birthyear을 가져오는 방법은? '객체 내에서 this.'를 사용하여 함수 만들면 됨
// console.log(jonas2['calcAge']());

// console.log(jonas2.calcAge());
// console.log(jonas2.calcAge());

console.log(jonas.calcAge());
console.log(jonas.age);

//Challenge
"Jonas is a 46-year old teacher, and he has a/no driver's license."

console.log(jonas.getSummary());





// 46강

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1'); // Not a good way to repeat (DRY principle violation)

// // for loop keeps runnung while condition is TRUE !!
// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }
// // 같은 코드를 반복해서 써야할 때 for loop를 씀





// //47강
// const jonas2 = [
//     'Jonas',
//     'Schemedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonas2.length; i++) { // Reading from jonas arry
//     console.log(jonas2[i], typeof jonas2[i]);
//     types[i] = typeof jonas2[i]; // Filling types array
//     types.push(typeof jonas2[i]);
// }


// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);


// //continue & break 
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas2.length; i++) {
//     if (typeof jonas2[i] !== 'string') continue; // to only log strings to the console
//     console.log(jonas2[i], typeof jonas2[i]);

// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas2.length; i++) {
//     if (typeof jonas2[i] === 'number') break; // to stop log when numbers appears
//     console.log(jonas2[i], typeof jonas2[i]);

// }


//48강

const jonas2 = [
    'Jonas',
    'Schemedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas2.length - 1; i >= 0; i--) { // jonas2.length -1 === last index
    console.log(i, jonas2[i]);
}

for (let exercise = 1; exercise < 4; exercise++) { // OUTER 루프
    console.log(`-------- Starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) { // INNER 루프
        console.log(`EXERCISE ${exercise}: Lifring weight repetition ${rep}`)
    }
}





//49강


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

// WHILE LOOP에서는 CONDITION 만 지정할 수 있다


let rep = 1;
while (rep <= 10) { // while loop is 'while' cause it will run 'while' this condition is true.
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

