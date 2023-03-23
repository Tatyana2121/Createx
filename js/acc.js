const acc = Array.from(document.querySelectorAll(".program__acc-item")); // считываем все элементы аккордеона в массив
function clearActiveItemMenu(){
	acc.forEach(function(box){
    if(box.classList.contains('program__acc-link--active')){
      box.classList.remove('program__acc-link--active');
    }
  });
}
acc.forEach((box) => {
  box.addEventListener("click", function(e) {
    e.preventDefault();
    if (box.classList.contains("program__acc-link--active")) {
      console.log('del');
      box.classList.remove("program__acc-link--active");
    } else {
      console.log('add');
      clearActiveItemMenu();
      box.classList.add("program__acc-link--active");
    }
  })
})


const accFooter = Array.from(document.querySelectorAll(".footer__top-col")); // считываем все элементы аккордеона в массив
function clearActiveItemMenu(){
	accFooter.forEach(function(box){
    if(box.classList.contains('footer__top-title--arrow')){
      box.classList.remove('footer__top-title--arrow');
    }
  });
}
accFooter.forEach((box) => {
  box.addEventListener("click", function(e) {
    e.preventDefault();
    if (box.classList.contains("footer__top-title--arrow")) {
      console.log('del');
      box.classList.remove("footer__top-title--arrow");
    } else {
      console.log('add');
      clearActiveItemMenu();
      box.classList.add("footer__top-title--arrow");
    }
  })
})