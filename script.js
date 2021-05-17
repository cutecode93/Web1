'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output);


        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true; // var 변수는 블록 스코프에 소속되지 않음. 대신 가장 가까운 펑션 스코프에 소속됨
            const firstName = 'Steven'; // 이 경우 아래 백틱 구문에는 Steven이 뜬다. 왜냐? 항상 current scope에서 가장 가까운 곳으로부터 답을 찾으려하기 때문
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b) {
                return a + b;
            }


            output = 'NEW OUTPUT' // 아우터 스코프에 소속된 변수를 이너 블록안에서 재할당
        }

    // console.log(str); // 당연히 reference error
    console.log(millenial);
    // add(2,3); // 당연히 reference error - 블록스코프에 소속된 함수는 inner scope
    console.log(output);

    }

    printAge();

    return age;
}


const firstName = 'Jonas'; // 이처럼 글로벌 스코프에 firstName이 있고, 위의 if 블록 스코프 안에 firstName이 있어 두개의 이름이 겹치지만, 문제되지 않는다. 왜냐면 두 변수가 소속하는 스코프가 다르기 때문이다. 그러면 이름만 같을 뿐 전혀다른 변수이게 된다.
calcAge(1991);