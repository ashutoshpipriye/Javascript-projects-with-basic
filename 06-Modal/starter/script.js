'use strict';

// console.log(document.querySelectorAll('.show-modal'));
// console.log(document.querySelector('.close-modal'));
// console.log(document.querySelector('.modal'));
// console.log(document.querySelector('.overlay'));


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

// console.log(btnsShowModal);

// Funtion of openModal
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Funtion of closeModal
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Show the data / open the modal...
for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', openModal);
}

//Close the window
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Handling an 'Esc' keypress event

// document.addEventListener('keydown', function () {
//     console.log("A key was pressed.")
// });

document.addEventListener('keydown', function (e) {
    // console.log(e.key)
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});