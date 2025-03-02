document.addEventListener("DOMContentLoaded", function() {
  console.log("Aya Ahmed's Portfolio Loaded Successfully!");

  const chatArea = document.getElementById("chat-area");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  sendBtn.addEventListener("click", function() {
      const userText = userInput.value.trim();
      if (userText) {
          chatArea.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;
          userInput.value = "";
          setTimeout(() => {
              chatArea.innerHTML += `<p><strong>Bot:</strong> Thanks for your message! I'll get back to you soon.</p>`;
          }, 1000);
      }
  });
});
