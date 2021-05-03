


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

const friends = ['Michael', 'Steven', 'Peter']
friends.push('Jay');
console.log(friends);