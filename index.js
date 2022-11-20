window.onscroll = function () {
    headerLimp();
  };
  
  let header = document.querySelector('.header');
  let menuHeight = header.offsetTop;
  
  function headerLimp() {
    if (window.pageYOffset > menuHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

