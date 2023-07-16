"use strict";

let fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach(function(fontSize) {
  fontSize.addEventListener('click', function(event) {
    event.preventDefault();

    // Удалить класс font-size_active у всех элементов
    fontSizes.forEach(function(el) {
      el.classList.remove('font-size_active');
    });

    // Добавить класс font-size_active элементу, на котором было событие click
    this.classList.add('font-size_active');

    // Получить размер шрифта из атрибута data-size
    let newSize = this.dataset.size;

    // Удалить все классы связанные с размером шрифта у элемента book
    let book = document.getElementById('book');
    book.classList.remove('book_fs-small', 'book_fs-big');

    // Добавить класс, соответствующий новому размеру шрифта, элементу book
    if (newSize === 'small') {
      book.classList.add('book_fs-small');
    } else if (newSize === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});