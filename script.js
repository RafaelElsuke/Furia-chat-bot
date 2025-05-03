const openBtn = document.getElementById("open-chatbot");
const closeBtn = document.getElementById("close-chatbot");
const chatbot = document.querySelector(".chatbot-popup");
const chatForm = document.querySelector(".chat-form");
const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");

// Abrir e fechar o chatbot
openBtn.addEventListener("click", () => {
  chatbot.classList.add("show");
  chatbot.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  chatbot.classList.add("hidden");
  chatbot.classList.remove("show");
});

// Enviar mensagem
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userMessage = messageInput.value.trim();

  if (userMessage !== "") {
    addMessage(userMessage, "user");
    respondToMessage(userMessage);
    messageInput.value = "";
  }
});

// Função para adicionar mensagem ao chat
function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", `${sender}-message`);

  const messageText = document.createElement("div");
  messageText.classList.add("message-text");
  messageText.innerText = text;

  messageDiv.appendChild(messageText);
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Respostas automáticas
function respondToMessage(msg) {
  const lowerMsg = msg.toLowerCase();

  if (lowerMsg === "oi" || lowerMsg === "ola") {
    const greetings = [
      "Olá! Tudo certo? Sou o bot da FURIA. 😎",
      "Fala, fã da FURIA! Como posso te ajudar hoje?",
      "E aí! Quer saber mais sobre os jogadores ou os campeonatos?",
      "Oi! Estou aqui pra te contar tudo sobre a FURIA!",
      "Salve! Manda aí sua dúvida sobre a equipe!"
    ];

    const randomIndex = Math.floor(Math.random() * greetings.length);
    const response = greetings[randomIndex];

    setTimeout(() => {
      addMessage(response, "bot");
    }, 500);

  } else if (lowerMsg.includes("jogadores") || lowerMsg.includes("player") || lowerMsg.includes("time")) {
    const players = [
      "O time principal da FURIA conta com jogadores incríveis como KSCERATO, yuurih e chelo!",
      "KSCERATO é um dos grandes destaques da FURIA, com jogadas muito sólidas!",
      "yuurih tem sido peça fundamental no desempenho da FURIA em campeonatos internacionais!",
      "chelo chegou recentemente e já está mostrando ótimo desempenho!",
      "A FURIA também conta com um excelente time técnico por trás dos jogadores!"
    ];

    const randomIndex = Math.floor(Math.random() * players.length);
    const response = players[randomIndex];

    setTimeout(() => {
      addMessage(response, "bot");
    }, 600);

  } else {
    setTimeout(() => {
      addMessage("Ainda estou aprendendo! Pergunte algo sobre a equipe FURIA. 😎", "bot");
    }, 700);
  }
}
