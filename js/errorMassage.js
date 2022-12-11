const formRef = document.querySelector('.modal__form');
const formLabels = document.querySelectorAll('.modal__label');
const formInputs = document.querySelectorAll('.modal__input');

formRef.addEventListener('submit', onFormSubmit);

formInputs.forEach(input => {
  input.addEventListener('input', onInputChange);
});

function onFormSubmit(e) {
  e.preventDefault();

  for (let i = formLabels.length - 1; i >= 0; i--) {
    const label = formLabels[i];
    const input = label.control;
    const inputValue = input.value.trim();
    let errorMessage = `<span class='error-message'>Enter data<span>`;
    if (inputValue === '' && !label.classList.contains('error')) {
      input.classList.add('error');
      label.classList.add('error');
      label.insertAdjacentHTML('beforeend', errorMessage);
    }
  }
}

function onInputChange(e) {
  e.preventDefault();
  const value = e.target.value.trim();
  const input = e.target;
  const label = input.labels[0];
  const errorMessage = label.lastChild;

  if (value !== '') {
    input.classList.remove('error');
    label.classList.remove('error');
    if (errorMessage.className === 'error-message') {
      errorMessage.remove();
    }
  }
}
