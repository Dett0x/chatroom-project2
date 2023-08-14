// Remove the import statement from this file
const socket = io('https://chatroom-project2.vercel.app'); // Provide the correct URL

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messages = document.getElementById('messages');

sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    socket.emit('chat message', message);
    messageInput.value = '';
  }
});

socket.on('chat message', (message) => {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messages.appendChild(messageElement);
});
