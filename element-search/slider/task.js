const slider = [...document.querySelectorAll(".slider__item")];
const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");
const dots = [...document.querySelectorAll(".slider__dot")];

function changeSlide(activePicture) {
  slider.forEach((itemSlider, index) => {
    itemSlider.classList.remove("slider__item_active");
    if (index === activePicture) {
      itemSlider.classList.add("slider__item_active");
    }
  });
  
  dots.forEach((itemDot, index) => {
    itemDot.classList.remove("slider__dot_active");
    if (index === activePicture) {
      itemDot.classList.add("slider__dot_active");
    }
  });
}

function findActiveIndex() {
  const searchIndex = slider.findIndex((sliderItem) => {
    return sliderItem.classList.contains("slider__item_active");
  });
  return searchIndex;
}

arrowPrev.onclick = () => {
  let sliderActive = findActiveIndex();
  if (sliderActive === 0) {
    sliderActive = slider.length - 1;
  } else {
    sliderActive = sliderActive - 1;
  }
  changeSlide(sliderActive);
};

arrowNext.onclick = () => {
  let sliderItem = findActiveIndex();
  if (sliderItem === slider.length - 1) {
    sliderItem = 0;
  } else {
    sliderItem = sliderItem + 1;
  }
  changeSlide(sliderItem);
};

dots[findActiveIndex()].classList.add("slider__dot_active");
dots.forEach(
  (item, index) =>
    (item.onclick = () => {
      changeSlide(index);
    })
);