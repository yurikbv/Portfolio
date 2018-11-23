(function () {
  if(document.querySelector('.auth')){
    let container = document.querySelector('.auth');
    let button = document.querySelector('.auth__login--link');
    let buttonSecond = document.querySelector('.auth__btn--back');

    let doToggle = (e) => {
      e.preventDefault();
      container.classList.toggle('auth__flip');
    };

    button.addEventListener('click',doToggle);
    buttonSecond.addEventListener('click',doToggle);
  }
})();