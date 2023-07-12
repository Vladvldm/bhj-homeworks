let tabArr = Array.from(document.querySelectorAll(".tab"));

tabArr.forEach((element, index) => {
  element.addEventListener("click", () => {
    tabArr.forEach((tab) => {
      tab.classList.remove("tab_active");
    });
    element.classList.remove("tab_active");

    tabContent = document.querySelectorAll(".tab__content");
    tabContent.forEach(function (element) {
      element.classList.remove("tab__content_active");
    });
    tabContent[index].classList.add("tab__content_active");
  });
});