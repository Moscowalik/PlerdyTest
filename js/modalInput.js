var input = document.querySelector('#phone');
window.intlTelInput(input, {
  separateDialCode: true,
  preferredCountries: [],
  initialCountry: 'ua',
  onlyCountries: ['ua', 'pl', 'gb'],
});
