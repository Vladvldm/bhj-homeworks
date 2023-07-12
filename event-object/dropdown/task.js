const dropdown = document.querySelector(".dropdown");
const list = document.querySelector(".dropdown__list");
const value = document.querySelector(".dropdown__value");

const links = Array.from(document.querySelectorAll(".dropdown__link"));

dropdown.addEventListener('click', (e) => {
  list.classList.toggle('dropdown__list_active');
});

for (let i = 0; i < links.length; i++) {
  links[i].onclick = () => {
    value.closest('div').textContent = links[i].textContent;
    return false;
  }
}