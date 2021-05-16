

//primitive types
let lastName = 'Williams';
let oldLastName = lastName; // 예전의 lastname을 기억하고싶다면 이런식으로 storing 가능
lastName = 'Davis'; // 그리고 바뀌는 값을 재할당
console.log(lastName, oldLastName); 


//reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica // -----> not gonna work
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {} ----> not gonna work


//copying objects 
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // 이렇게 하면 객체 복사 가능!! so that we can actually change the property/value. 그러나 이러한 Object.assign의 한계 = surface object 까지는 가능하나 object 안의 inner object까지는 불가능
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

// 지금까지 배운 방법들은 shallow copy. inner part까지 카피가능한 Deep clone은 lo-dash 같은 라이브러리를 가져와서 할 수 있음