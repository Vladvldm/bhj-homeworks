const poolTitle = document.getElementById("poll__title");
const poolAnswers = document.getElementById("poll__answers");

let request = new XMLHttpRequest();
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.send();
request.onreadystatechange = function () {
  if(request.readyState === 4) {
    let response = JSON.parse(request.responseText);
    poolTitle.innerHTML = response.data.title;
    for (let answer in response.data.answers) {
      console.log(response.id)
      poolAnswers.innerHTML += "<button class=\"poll__answer\">" + response.data.answers[answer] + "</button>"
    };
    const btns = document.querySelectorAll(".poll__answer");
    btns.forEach((btn, index) => btn.onclick = () => {
      alert("Ваш голос учтен!");
      poolAnswers.innerHTML = "";
      const xhr = new XMLHttpRequest();
      xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
      xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
      xhr.send('vote=' + response.id + '&answer=' + index);
      xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
          let votesSum = 0;
          let responseResult = JSON.parse(xhr.responseText).stat;
          console.log(responseResult)
          responseResult.forEach(result => {
            votesSum += result.votes;
          })
          responseResult.forEach((result) => {
            let percent = ((result.votes / votesSum) * 100).toFixed(2);
            poolAnswers.innerHTML += "<div>" + result.answer + " <b>" + percent + "%" + "</b></div>";
          })
        }
      }
    })
  }
};