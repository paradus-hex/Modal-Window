'use strict';
const btnsShowModal = document.querySelectorAll('.show-modal'); //Creating variable so that i don't have type the whole thing like in the first project
//querySelectorALL selects multiple elements inside a class and presents it in basically an array[called node]
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModal = function () {
  modal.classList.remove('hidden'); //notice there is no "." before hidden as it's not an element to be selected.removing the hidden property brings the modal window to light
  overlay.classList.remove('hidden'); //brings the blurr to the front
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal); //notice that the function isn't called with ()i.e closeModal().That is because, doing so calls the function immediately to run. but with the bracs the function will be auto run by the event handler when the button is clicked
overlay.addEventListener('click', closeModal);
1;

//key-press event.this is a global event as this works on the whole document.that's why the dierect document.addEventListener
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
