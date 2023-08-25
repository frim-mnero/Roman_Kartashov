let burger = document.querySelector(".burger");
let closeNav = document.querySelector(".closeNav");
let nav = document.querySelector("nav");
let backBody = document.querySelector("body");
let shadow = document.querySelector(".shadowBlueBlock");
let formZapic = document.querySelector(".contBlockCons");
let closeForm = document.querySelector(".closeWindow");

const btmNext = document.querySelector(".rightSlide");
const btmPrev = document.querySelector(".leftSlide");

let slider = document.querySelector(".otzivi__group");
let sliderItem = Array.from(slider.children);

sliderItem.forEach(function (slide, index) {
  

  if (index != 0) {
    slide.classList.add("hidden");
  }

  slide.dataset.index = index;

  sliderItem[0].setAttribute("data", "");
  //клик по слайдам
  slide.addEventListener("click", function () {
    //скрываем текущий слайд
    slide.classList.add("hidden");
    slide.removeAttribute("data");

    //расчитывает следующий слайд

    let nextSlideIndex = index + 1 === sliderItem.length ? 0 : index + 1;

    //находим следующий слайд
    nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    //отображаем следующий слайд
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data", "");
  });
});
btmNext.onclick = function () {

  const currentSlide = slider.querySelector("[data]");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data");

  const nextSlideIndex = currentSlideIndex + 1 === sliderItem.length ? 0 : currentSlideIndex + 1;
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data",'')



};

btmPrev.onclick = function (){
  
  const currentSlide = slider.querySelector("[data]");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data");

  const nextSlideIndex =
    currentSlideIndex ===0? sliderItem.length -1 : currentSlideIndex - 1;
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data", "");

}




burger.addEventListener("click", function () {
  backBody.classList.add("backgroundBody");
  nav.classList.add("openNav");
  // backBody.classList.add("boduHidden");
});
closeNav.addEventListener("click", function () {
  nav.classList.remove("openNav");
  backBody.classList.remove("backgroundBody");
  //  backBody.classList.remove("boduHidden");
});

function hello() {
  formZapic.classList.add("openFormZapics");
  shadow.classList.add("displBlock");
  backBody.classList.add("hiddenOver");
}
function buy() {
  formZapic.classList.remove("openFormZapics");
  shadow.classList.remove("displBlock");
  backBody.classList.remove("hiddenOver");
}
if (window.devicePixelRatio !== 1) {
  // Костыль для определения иных устройств, с коэффициентом отличным от 1
  var dpt = window.devicePixelRatio;
  var widthM = window.screen.width * dpt;
  var widthH = window.screen.height * dpt;
  document.write(
    '<meta name="viewport" content="width=' +
      widthM +
      ", height=" +
      widthH +
      '">'
  );
}
