const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');   

  xhr.upload.addEventListener('progress', event => {
    progress.value = event.loaded / event.total;
  });
  
  const formData = new FormData(form);
  xhr.send(formData);

  event.preventDefault();
});