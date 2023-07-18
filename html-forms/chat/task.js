const chatWidget = document.querySelector('.chat-widget');

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active')
});

let chatWidgetInput = document.getElementById('chat-widget__input');

const messages = document.querySelector( '.chat-widget__messages');

let messagesFromRobot = [
  'Напишите в следующей жизни.', 
  'Не пишите нам больше.', 
  'Кто тут?', 
  'Добрый день! Досвидания!', 
  'Где ваша совесть?',
  'Мы ничего не будем вам продавать!'
];

chatWidgetInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && chatWidgetInput.value.trim().length > 0) {
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
      <div class="message__text">
        ${chatWidgetInput.value}
      </div>
    </div>
  `;
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">
          ${messagesFromRobot[Math.floor(Math.random() * messagesFromRobot.length)]}
        </div>
      </div>
    `;
    chatWidgetInput.value = "";

    messages.lastElementChild.scrollIntoView(false);
  }  
});