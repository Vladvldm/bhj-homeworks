const form = document.querySelector('#signin__form');
const formLogin = form.login;
const formPassword = form.password;
const signIn = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');
const exit = document.querySelector('.exit')
let response;
let invalid = document.createElement('div');


// Проверка на существование user_id в localStorage
if(document.readyState && localStorage.user_id) {
    signIn.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    welcome.querySelector('span').textContent = `${localStorage.user_id}`;
    exit.classList.add('exit_active');
};

//delete localStorage.user_id

// Проверяем заполненность полей
function authorization(object) {  // Функция проверки существования авторизации
  if(object.success) {
    localStorage.setItem('user_id', object.user_id);

    signIn.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    welcome.querySelector('span').textContent = `${localStorage.user_id}`;

    exit.classList.add('exit_active');

    formLogin.value = '';
    formPassword.value = '';

    if(invalid.textContent !== '') {
      invalid.textContent = '';
    };
  } else {
    formLogin.value = '';
    formPassword.value = '';

    invalid.textContent = '';
    invalid.textContent = 'Неверный логин/пароль';

    signIn.after(invalid);
  };
};

form.addEventListener('submit', e => {  // Получение данных от пользователя
  e.preventDefault();

  if(formLogin.value && formPassword.value) { // Проверяем заполненность полей
    const formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    xhr.addEventListener('load', e => {
      if(xhr.readyState === xhr.DONE && xhr.status === 201) {
        response = JSON.parse(xhr.responseText);
        authorization(response);
      };
    });
    xhr.send(formData);
  };
});

exit.addEventListener('click', e => { // Функц. деавторизация
  e.preventDefault();

  signIn.classList.add('signin_active');
  welcome.classList.remove('welcome_active');
  welcome.querySelector('span').textContent = '';
  exit.classList.remove('exit_active');

  delete localStorage.user_id;
});