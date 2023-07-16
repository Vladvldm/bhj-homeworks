"use strict";

let rotator = document.querySelector('.rotator');
let cases = Array.from(rotator.querySelectorAll('.rotator__case'));

let intervalId = setInterval(function() {
  let activeIndex = cases.findIndex(function(caseEl) {
    return caseEl.classList.contains('rotator__case_active');
  });

  cases[activeIndex].classList.remove('rotator__case_active');
  cases[(activeIndex + 1) % cases.length].classList.add('rotator__case_active');
}, 1000);