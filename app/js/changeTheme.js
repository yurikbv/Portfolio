(function () {
  if(localStorage.getItem('theme')){
    document.body.className = localStorage.getItem('theme');
  } else document.body.className = 'mountains';

  let change = document.querySelector('.change__container');

  if(change){
    change.addEventListener('click', function (event) {
      event.preventDefault();
      if(event.target.closest('.change__theme-item')){
        let value = event.target.closest('.change__theme-item').dataset.theme;
        console.log(value);
        localStorage.setItem('theme',value);
        location.reload();
      }
    })
  }
})();