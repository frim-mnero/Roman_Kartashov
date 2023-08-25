const btnNext = document.querySelector(".rightSlide2");
const btnPrev = document.querySelector(".leftSlid2");

const slider2 = document.querySelector(".mainRightEms");
const sliderItems2 = Array.from(slider2.children);
console.log(sliderItems2);
sliderItems2.forEach(function (slide, index) {
  if (index != 0) {
    slide.classList.add("hidden");
  }

  slide.dataset.index = index;

  sliderItem[0].setAttribute("data", "");
  //клик по слайдам
  slide.addEventListener("click", function () {
    //скрываем текущий слайд
    console.log("click");
    slide.classList.add("hidden");
    slide.removeAttribute("data");

    //расчитывает следующий слайд

    let nextSlideIndex = index + 1 === sliderItem.length ? 0 : index + 1;

    //находим следующий слайд
    nextSlide = slider2.querySelector(`[data-index="${nextSlideIndex}"]`);

    //отображаем следующий слайд
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data", "");
  });
});

btnNext.onclick = function () {
    console.log("forw");
  const currentSlide = slider2.querySelector("[data]");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data");

  const nextSlideIndex =
    currentSlideIndex + 1 === sliderItem.length ? 0 : currentSlideIndex + 1;
  const nextSlide = slider2.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data", "");
};

btnPrev.onclick = function () {
    console.log("back");
  const currentSlide = slider2.querySelector("[data]");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data");

  const nextSlideIndex =
    currentSlideIndex === 0 ? sliderItem.length - 1 : currentSlideIndex - 1;
  const nextSlide = slider2.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data", "");
};
