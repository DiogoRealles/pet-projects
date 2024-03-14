export default function modal() {
  let modalButtonOpen = document.querySelector('[data-js="modalButtonOpen"]');
  let modalButtonClose = document.querySelector('[data-js="modalButtonClose"]');
  let modal = document.querySelector('[data-js="modal"]');

  modalButtonOpen.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('active');
  });

  modalButtonClose.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.remove('active');
  });
}