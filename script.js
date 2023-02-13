'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function (open) {
  open.addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});

function getIndexToIns(arr, num) {
  if (arr[0] === undefined) {
    arr.push(num);
  }
  function sorted(a, b) {
    return a - b;
  }
  arr.sort(sorted);
  arr.map((curr, i, arr) => {
    if (curr < num && num < arr[i + 1] && arr[i + 1]) {
      arr.splice(i + 1, 0, num);
    } else arr.push(num);
  });
  return arr.indexOf(num);
}

console.log(getIndexToIns([], 1));
