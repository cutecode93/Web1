'use strict';

const modal = document.querySelector('.modal');
const overlay = document. querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);


const closeModal = function() { // refactoring 1
    modal.classList.add('hidden');
    overlay.classList.add('hidden');  // overlay = modal 바깥의 배경을 시꺼멓게
}

const openModal = function () { // refactoring 2
    console.log('Button clicked');
    modal.classList.remove('hidden'); // 이처럼 이미 존재하는 요소에 hidden을 붙였다 뗐다 함으로써 activate / deactivate 할수있음
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
console.log(btnsOpenModal[i].addEventListener('click', openModal)); // remember: 이벤트리스너 뒤에 두번째 매개변수에 function이 올때 openModal() 이런식으로 써서는 안됨. 이벤트리스너 자체에 이미 실행기능이 있기 때문에 함수 써줄때는 openModal 이렇게만 쓰면됨


btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


