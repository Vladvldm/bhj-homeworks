const loaderImg = document.getElementById("loader");
const items = document.getElementById("items");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    let output = '';
    let data = JSON.parse(xhr.responseText).response.Valute;
    for (let key in data) {
      output += "<div class=\"item\"> <div class=\"item__code\">" + data[key].CharCode + "</div>" + "<div class=\"item__value\">" + data[key].Value + "</div>" + "<div class=\"item__currency\"> руб. </div> </div>"
    }
    loaderImg.classList.remove("loader_active");
    items.innerHTML = output;
  }
};