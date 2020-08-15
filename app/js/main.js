let header = document.getElementsByClassName('header')[0];



window.addEventListener('scroll', function() {
  if (window.pageYOffset >= 140) {
    header.classList.add("active");
  }else {
    header.classList.remove("active");
  }
});
