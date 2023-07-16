'use strict';

window.addEventListener('scroll', function() {
  let blocks = document.querySelectorAll('.reveal');

  blocks.forEach(function(block) {
    let blockTop = block.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (blockTop < windowHeight) {
      block.classList.add('reveal_active');
    }
  });
});